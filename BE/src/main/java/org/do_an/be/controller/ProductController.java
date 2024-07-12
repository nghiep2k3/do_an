package org.do_an.be.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.do_an.be.dtos.CategoryDTO;
import org.do_an.be.dtos.ProductDTO;
import org.do_an.be.responses.ResponseObject;
import org.do_an.be.responses.product.ProductListResponse;
import org.do_an.be.responses.product.ProductResponse;
import org.do_an.be.service.ProductRedisService;
import org.do_an.be.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
import java.util.List;
import java.util.UUID;

@RequestMapping("/api/products")
@RestController
@RequiredArgsConstructor
public class ProductController {
    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);
    private final ProductRedisService productRedisService;

    private static  ProductService productService;
    @GetMapping("")
    public ResponseEntity<String> getAllProduct(
            @RequestParam("page") int page,
            @RequestParam("limit") int limit

    ){
        return ResponseEntity.ok(String.format("getAllCate, page = %d , limit =%d",page,limit));
    }

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
        logger.info(String.format("keyword = %s, category_id = %d, page = %d, limit = %d",
                keyword, categoryId, page, limit));
        List<ProductResponse> productResponses = productRedisService
                .getAllProducts(keyword, categoryId, pageRequest);
        if (productResponses!=null && !productResponses.isEmpty()) {
            totalPages = productResponses.get(0).getTotalPages();
        }
        if(productResponses == null) {
            Page<ProductResponse> productPage = productService
                    .getAllProducts(keyword, categoryId, pageRequest);
            // Lấy tổng số trang
            totalPages = productPage.getTotalPages();
            productResponses = productPage.getContent();
            // Bổ sung totalPages vào các đối tượng ProductResponse
            for (ProductResponse product : productResponses) {
                product.setTotalPages(totalPages);
            }
            productRedisService.saveAllProducts(
                    productResponses,
                    keyword,
                    categoryId,
                    pageRequest
            );
        }
        ProductListResponse productListResponse = ProductListResponse
                .builder()
                .products(productResponses)
                .totalPages(totalPages)
                .build();
        return ResponseEntity.ok().body(ResponseObject.builder()
                .message("Get products successfully")
                .status(HttpStatus.OK)
                .data(productListResponse)
                .build());
    }
}