package com.example.recommendation.repository;

import com.example.recommendation.integration.AbstractIntegrationTest;
import com.example.recommendation.model.Resource;
import com.example.recommendation.model.ResourceLevel;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Teste de integração real contra um PostgreSQL via Testcontainers
 * (incluindo as migrations Flyway V1 e V2 aplicadas de fato).
 *
 * Sufixo "IT" (Integration Test) em vez de "Test": a ideia é que este
 * teste seja executado pelo maven-failsafe-plugin via `mvn verify`,
 * separado dos testes unitários rápidos rodados por `mvn test`.
 */
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ResourceRepositoryIT extends AbstractIntegrationTest {

    @org.springframework.beans.factory.annotation.Autowired
    private ResourceRepository resourceRepository;

    @Test
    void findByCompetencyIdAndLevel_deveRetornarApenasRecursosCorrespondentes() {
        Resource beginnerCompetency1 = new Resource();
        beginnerCompetency1.setName("Recurso A");
        beginnerCompetency1.setDescription("Descrição A");
        beginnerCompetency1.setUrl("https://exemplo.com/a");
        beginnerCompetency1.setCompetencyId(1L);
        beginnerCompetency1.setLevel(ResourceLevel.BEGINNER);

        Resource advancedCompetency1 = new Resource();
        advancedCompetency1.setName("Recurso B");
        advancedCompetency1.setDescription("Descrição B");
        advancedCompetency1.setUrl("https://exemplo.com/b");
        advancedCompetency1.setCompetencyId(1L);
        advancedCompetency1.setLevel(ResourceLevel.ADVANCED);

        Resource beginnerCompetency2 = new Resource();
        beginnerCompetency2.setName("Recurso C");
        beginnerCompetency2.setDescription("Descrição C");
        beginnerCompetency2.setUrl("https://exemplo.com/c");
        beginnerCompetency2.setCompetencyId(2L);
        beginnerCompetency2.setLevel(ResourceLevel.BEGINNER);

        resourceRepository.saveAll(List.of(beginnerCompetency1, advancedCompetency1, beginnerCompetency2));

        List<Resource> result = resourceRepository.findByCompetencyIdAndLevel(1L, ResourceLevel.BEGINNER);

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getName()).isEqualTo("Recurso A");
    }

    @Test
    void findByCompetencyIdAndLevel_deveRetornarVazio_quandoNenhumRecursoCorresponde() {
        List<Resource> result = resourceRepository.findByCompetencyIdAndLevel(999L, ResourceLevel.ADVANCED);

        assertThat(result).isEmpty();
    }

    @Test
    void save_deveAplicarNivelPadraoBeginner_quandoLevelNaoInformadoExplicitamente() {
        // Cobre a constraint NOT NULL + default introduzida na migration V2
        Resource resource = new Resource();
        resource.setName("Recurso sem nível explícito");
        resource.setDescription("desc");
        resource.setUrl("https://exemplo.com/sem-nivel");
        resource.setCompetencyId(5L);
        // level não é setado: a entidade já inicializa com BEGINNER por padrão

        Resource saved = resourceRepository.save(resource);

        assertThat(saved.getLevel()).isEqualTo(ResourceLevel.BEGINNER);
    }
}
