package org.do_an.be.responses.order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
public class OrderListResponse {
    private List<com.project.shopapp.responses.order.OrderResponse> orders;
    private int totalPages;
}
