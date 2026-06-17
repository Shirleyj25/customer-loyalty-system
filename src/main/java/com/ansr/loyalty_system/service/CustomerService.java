package com.ansr.loyalty_system.service;

import com.ansr.loyalty_system.entity.Customer;
import com.ansr.loyalty_system.entity.Transaction;
import com.ansr.loyalty_system.repository.CustomerRepository;
import com.ansr.loyalty_system.repository.TransactionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private TransactionRepository transactionRepo;

    // Add Customer
    public Customer addCustomer(Customer customer) {
        return customerRepo.save(customer);
    }

    // Get All Customers
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    // Add Purchase
    public Customer addPurchase(Long id, double amount) {

        Customer customer = customerRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        int points = (int) amount / 100;

        customer.setTotalPoints(
                customer.getTotalPoints() + points);

        customerRepo.save(customer);

        Transaction transaction = new Transaction();

        transaction.setAmountSpent(amount);
        transaction.setPointsEarned(points);
        transaction.setBonusPoints(0);
        transaction.setCustomer(customer);

        transactionRepo.save(transaction);

        return customer;
    }

    // Add Bonus Points
    public Customer addBonus(Long id, int bonus) {

        Customer customer = customerRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        customer.setTotalPoints(
                customer.getTotalPoints() + bonus);

        customerRepo.save(customer);

        return customer;
    }
}