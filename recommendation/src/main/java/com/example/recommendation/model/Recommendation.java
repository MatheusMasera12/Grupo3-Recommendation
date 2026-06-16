package com.example.recommendation.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
    name = "tb_recommendations",
    uniqueConstraints = {
        @UniqueConstraint(columnNames = {"user_id", "resource_id"})
    }
)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    @ManyToOne
    @JoinColumn(name = "resource_id")
    private Resource resource;

    private String description;
}