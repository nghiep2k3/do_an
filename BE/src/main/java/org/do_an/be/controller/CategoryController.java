package org.do_an.be.controller;

import org.do_an.be.dtos.CategoryDTO;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/categories")
@RestController
public class CategoryController {
    @GetMapping("")
    public ResponseEntity<String> getAllCategories(
            @RequestParam(defaultValue = "0", required = false)
            int page,
            @RequestParam(defaultValue = "5", required = false)
            int size

    ){
        Pageable pageable = PageRequest.of(page, size);
        return ResponseEntity.ok(String.format("getAllCate, page = %d , limit =%d",page,pageable));
    }

    @PostMapping("")
    public ResponseEntity<String> insertCategory( @RequestBody CategoryDTO categoryDTO){
        return ResponseEntity.ok(categoryDTO.getName());
    }


}
