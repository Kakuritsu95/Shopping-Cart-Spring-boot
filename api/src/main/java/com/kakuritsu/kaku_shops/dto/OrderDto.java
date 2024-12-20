package com.kakuritsu.kaku_shops.dto;

import com.kakuritsu.kaku_shops.enums.OrderStatus;
import com.kakuritsu.kaku_shops.model.Address;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Set;

@Data
public class OrderDto {
    private Long id;
    private Long userId;
    private LocalDate orderDate;
    private BigDecimal totalAmount;
    private OrderStatus orderStatus;
    private Set<OrderItemDto> orderItems;
    private Address address;
    private String refCode;
}
