package com.example.recommendation.repository;

import com.example.recommendation.model.Recommendation;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    
    @EntityGraph(attributePaths = {"resource"})
    List<Recommendation> findByUserId(Long userId, Pageable pageable);

    List<Recommendation> findByResourceId(Long resourceId);

    @Modifying
    @Transactional
    void deleteByResourceId(Long resourceId);

    boolean existsByUserIdAndResourceId(Long userId, Long resourceId);
}
