package org.do_an.be.service;

import lombok.RequiredArgsConstructor;
import org.do_an.be.dtos.ProductDetailDTO;
import org.do_an.be.entity.Product;
import org.do_an.be.entity.ProductDetail;
import org.do_an.be.exception.DataNotFoundException;
import org.do_an.be.repository.CategoryRepository;
import org.do_an.be.repository.ProductDetailRepository;
import org.do_an.be.repository.ProductImageRepository;
import org.do_an.be.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProductDetailService {
    private final ProductRepository productRepository;
    private final ProductDetailRepository productDetailRepository;
    @Transactional
    public ProductDetail createProduct(ProductDetailDTO productDetailDTO,Integer id) throws DataNotFoundException {
        Product existingProduct = productRepository
                .findById(id)
                .orElseThrow(() ->
                        new DataNotFoundException(
                                "Cannot find category with id: "+id));

        ProductDetail newProductDetail = ProductDetail.builder()
                .cpu(productDetailDTO.getCpu())
                .vga(productDetailDTO.getVga())
                .ram(productDetailDTO.getRam())
                .drive(productDetailDTO.getDrive())
                .display(productDetailDTO.getDisplay())
                .product(existingProduct)
                .build();
        return productDetailRepository.save(newProductDetail);
    }
}
