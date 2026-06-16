package com.example.recommendation.repository;

import com.example.recommendation.model.Recommendation;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    
    @EntityGraph(attributePaths = {"resource"})
    List<Recommendation> findByUserId(Long userId, Pageable pageable);

    @Modifying
    @Transactional
    void deleteByResource_Id(Long resourceId);

    boolean existsByUserIdAndResource_Id(Long userId, Long resourceId);

    @Query("SELECT r.userId FROM Recommendation r WHERE r.resource.id = :resourceId")
    List<Long> findUserIdsByResourceId(@Param("resourceId") Long resourceId);
}
