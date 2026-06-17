package com.ansr.loyalty_system.repository;
import com.ansr.loyalty_system.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository
        extends JpaRepository<Transaction, Long> {
}

