package com.ansr.loyalty_system.controller;

import com.ansr.loyalty_system.entity.Customer;
import com.ansr.loyalty_system.service.CustomerService;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private CustomerService service;

 @PostMapping
public Customer addCustomer(
        @Valid @RequestBody Customer customer) {

    return service.addCustomer(customer);
}

    @GetMapping
    public List<Customer> getCustomers() {
        return service.getAllCustomers();
    }

    @PostMapping("/{id}/purchase")
    public Customer purchase(
            @PathVariable Long id,
            @RequestParam double amount) {

        return service.addPurchase(id, amount);
    }

    @PostMapping("/{id}/bonus")
    public Customer bonus(
            @PathVariable Long id,
            @RequestParam int points) {

        return service.addBonus(id, points);
    }
}
