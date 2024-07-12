package org.do_an.be.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.do_an.be.components.LocalizationUtils;
import org.do_an.be.dtos.CategoryDTO;
import org.do_an.be.dtos.ProductDTO;
import org.do_an.be.dtos.ProductImageDTO;
import org.do_an.be.entity.Product;
import org.do_an.be.entity.ProductImage;
import org.do_an.be.responses.ResponseObject;
import org.do_an.be.responses.product.ProductListResponse;
import org.do_an.be.responses.product.ProductResponse;
import org.do_an.be.service.ProductService;
import org.do_an.be.utils.FileUtils;
import org.do_an.be.utils.MessageKeys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequestMapping("/api/products")
@RestController
@RequiredArgsConstructor
public class ProductController {
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
    private final   ProductService productService;
    private final LocalizationUtils localizationUtils;

    @PostMapping(value = "" , consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> insertProduct(
            @ModelAttribute ProductDTO productDTO
//            @RequestPart("file") MultipartFile file
    ) throws IOException {
        MultipartFile file = productDTO.getFile();
        if(file.getSize() > 10 *1024 *1024){
            return ResponseEntity.status(
                    HttpStatus.PAYLOAD_TOO_LARGE).body("File is to large ! Maximum is 10MB")
                    ;
        }
        String contentType = file.getContentType();
        if(contentType == null || contentType.startsWith("images/")){
            return ResponseEntity.status(
                    HttpStatus.UNSUPPORTED_MEDIA_TYPE).body("File must be an image")
                    ;
        }
        String filename = storeFile(file);
        return ResponseEntity.ok("Success " +filename);
    }
    private String storeFile(MultipartFile file)throws IOException{
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        String uniqueFilename = UUID.randomUUID().toString() + "_" +filename;
        Path uploadDir = Paths.get("uploads");
        if(!Files.exists(uploadDir)){
            Files.createDirectories(uploadDir);
        }
        java.nio.file.Path destination = Paths.get(uploadDir.toString(),uniqueFilename);
        Files.copy(file.getInputStream(),destination, StandardCopyOption.REPLACE_EXISTING);
        return uniqueFilename;
    }
    @GetMapping("/{id}")
    public  ResponseEntity<String> getProductById(
            @PathVariable("id") String productId
    ){
        return ResponseEntity.ok(productId);
    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<String> deleteProductById(
            @PathVariable("id") int id
    ){
        return ResponseEntity.ok(String.format("Product with id = %d" ,id) );
    }
    @GetMapping("")
    public ResponseEntity<ResponseObject> getProducts(
            @RequestParam(defaultValue = "") String keyword,
            @RequestParam(defaultValue = "0", name = "category_id") Long categoryId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int limit
    ) throws JsonProcessingException {
        int totalPages = 0;
        //productRedisService.clear();
        // Tạo Pageable từ thông tin trang và giới hạn
        PageRequest pageRequest = PageRequest.of(
                page, limit,
                //Sort.by("createdAt").descending()
                Sort.by("id").ascending()
        );
//        logger.info(String.format("keyword = %s, category_id = %d, page = %d, limit = %d",
//                keyword, categoryId, page, limit));
//        List<ProductResponse> productResponses = productRedisService
//                .getAllProducts(keyword, categoryId, pageRequest);
        Page<ProductResponse> productResponses = productService
                .getAllProducts(keyword, categoryId, pageRequest);
        // Lấy tổng số trang
        totalPages = productResponses.getTotalPages();
        List<ProductResponse> productResponseList = productResponses.getContent();
        // Bổ sung totalPages vào các đối tượng ProductResponse
        for (ProductResponse product : productResponses) {
            product.setTotalPages(totalPages);
        }
        ProductListResponse productListResponse = ProductListResponse
                .builder()
                .products(productResponseList)
                .totalPages(totalPages)
                .build();
        return ResponseEntity.ok().body(ResponseObject.builder()
                .message("Get products successfully")
                .status(HttpStatus.OK)
                .data(productListResponse)
                .build());
    }
    @PostMapping(value = "uploads/{id}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    //POST http://localhost:8088/v1/api/products
    public ResponseEntity<ResponseObject> uploadImages(
            @PathVariable("id") Long productId,
            @ModelAttribute("files") List<MultipartFile> files
    ) throws Exception {
        Product existingProduct = productService.getProductById(productId);
        files = files == null ? new ArrayList<MultipartFile>() : files;
        if(files.size() > ProductImage.MAXIMUM_IMAGES_PER_PRODUCT) {
            return ResponseEntity.badRequest().body(
                    ResponseObject.builder()
                            .message(localizationUtils
                                    .getLocalizedMessage(MessageKeys.UPLOAD_IMAGES_MAX_5))
                            .build()
            );
        }
        List<ProductImage> productImages = new ArrayList<>();
        for (MultipartFile file : files) {
            if(file.getSize() == 0) {
                continue;
            }
            // Kiểm tra kích thước file và định dạng
            if(file.getSize() > 10 * 1024 * 1024) { // Kích thước > 10MB
                return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE)
                        .body(ResponseObject.builder()
                                .message(localizationUtils
                                        .getLocalizedMessage(MessageKeys.UPLOAD_IMAGES_FILE_LARGE))
                                .status(HttpStatus.PAYLOAD_TOO_LARGE)
                                .build());
            }
            String contentType = file.getContentType();
            if(contentType == null || !contentType.startsWith("image/")) {
                return ResponseEntity.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                        .body(ResponseObject.builder()
                                .message(localizationUtils
                                        .getLocalizedMessage(MessageKeys.UPLOAD_IMAGES_FILE_MUST_BE_IMAGE))
                                .status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
                                .build());
            }
            // Lưu file và cập nhật thumbnail trong DTO
            String filename = FileUtils.storeFile(file);
            //lưu vào đối tượng product trong DB
            ProductImage productImage = productService.createProductImage(
                    existingProduct.getId(),
                    ProductImageDTO.builder()
                            .imageUrl(filename)
                            .build()
            );
            productImages.add(productImage);
        }

        return ResponseEntity.ok().body(ResponseObject.builder()
                .message("Upload image successfully")
                .status(HttpStatus.CREATED)
                .data(productImages)
                .build());
    }
    @GetMapping("/images/{imageName}")
    public ResponseEntity<?> viewImage(@PathVariable String imageName) {
        try {
            java.nio.file.Path imagePath = Paths.get("uploads/"+imageName);
            UrlResource resource = new UrlResource(imagePath.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(resource);
            } else {
                logger.info(imageName + " not found");
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(new UrlResource(Paths.get("uploads/notfound.jpeg").toUri()));
                //return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            logger.error("Error occurred while retrieving image: " + e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }
}