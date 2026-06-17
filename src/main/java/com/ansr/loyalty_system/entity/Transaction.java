package com.ansr.loyalty_system.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double amountSpent;

    private int pointsEarned;

    private int bonusPoints;

    private LocalDateTime date = LocalDateTime.now();

    @ManyToOne
    private Customer customer;
}