package com.ansr.loyalty_system.repository;

import com.ansr.loyalty_system.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository
        extends JpaRepository<Customer, Long> {
}