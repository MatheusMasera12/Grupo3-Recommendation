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
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation{
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    @ManyToOne(fetch = jakarta.persistence.FetchType.LAZY)
    @JoinColumn(name = "resource_id")
    private Resource resource;

    private String description;
}