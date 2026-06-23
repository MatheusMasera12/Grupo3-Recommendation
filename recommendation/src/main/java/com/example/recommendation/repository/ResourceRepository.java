package com.example.recommendation.repository;

import com.example.recommendation.model.Resource;
import com.example.recommendation.model.ResourceLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Long> {
    List<Resource> findByCompetencyIdAndLevel(Long competencyId, ResourceLevel level);
}
