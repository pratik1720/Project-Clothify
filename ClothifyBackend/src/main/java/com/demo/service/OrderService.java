package com.demo.service;

import com.demo.model.Order;

public interface OrderService {

	Order add(Order order);

	int Update(Order order);

	void complete(Order order);

}
