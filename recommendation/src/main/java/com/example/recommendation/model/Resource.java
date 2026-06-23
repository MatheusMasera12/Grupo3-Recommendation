package com.example.recommendation.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_resources")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Resource{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String url;

    private Long competencyId;

    @Enumerated(EnumType.STRING)
    private ResourceLevel level = ResourceLevel.BEGINNER;

    @PostLoad
    public void ensureLevel() {
        if (this.level == null) {
            this.level = ResourceLevel.BEGINNER;
        }
    }
}