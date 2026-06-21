package com.example.recommendation.repository;

import com.example.recommendation.integration.AbstractIntegrationTest;
import com.example.recommendation.model.Recommendation;
import com.example.recommendation.model.Resource;
import com.example.recommendation.model.ResourceLevel;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.PageRequest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class RecommendationRepositoryIT extends AbstractIntegrationTest {

    @Autowired
    private RecommendationRepository recommendationRepository;

    @Autowired
    private ResourceRepository resourceRepository;

    private Resource criarRecurso(String nome, Long competencyId) {
        Resource resource = new Resource();
        resource.setName(nome);
        resource.setDescription("desc " + nome);
        resource.setUrl("https://exemplo.com/" + nome);
        resource.setCompetencyId(competencyId);
        resource.setLevel(ResourceLevel.BEGINNER);
        return resourceRepository.save(resource);
    }

    @Test
    void findExistingResourceIdsForUser_deveRetornarApenasRecursosJaRecomendadosAoUsuario() {
        Resource recursoA = criarRecurso("Recurso A", 1L);
        Resource recursoB = criarRecurso("Recurso B", 1L);
        Resource recursoC = criarRecurso("Recurso C", 1L);

        Recommendation recUsuario1 = new Recommendation();
        recUsuario1.setUserId(1L);
        recUsuario1.setResource(recursoA);
        recUsuario1.setDescription("já recomendado");
        recommendationRepository.save(recUsuario1);

        Recommendation recOutroUsuario = new Recommendation();
        recOutroUsuario.setUserId(2L);
        recOutroUsuario.setResource(recursoB);
        recOutroUsuario.setDescription("recomendado para outro usuário");
        recommendationRepository.save(recOutroUsuario);

        List<Long> existentes = recommendationRepository.findExistingResourceIdsForUser(
                1L, List.of(recursoA.getId(), recursoB.getId(), recursoC.getId()));

        assertThat(existentes).containsExactly(recursoA.getId());
    }

    @Test
    void findUserIdsByResourceId_deveRetornarTodosUsuariosComRecomendacaoParaORecurso() {
        Resource recurso = criarRecurso("Recurso Compartilhado", 1L);

        Recommendation rec1 = new Recommendation();
        rec1.setUserId(10L);
        rec1.setResource(recurso);
        rec1.setDescription("desc");
        recommendationRepository.save(rec1);

        Recommendation rec2 = new Recommendation();
        rec2.setUserId(20L);
        rec2.setResource(recurso);
        rec2.setDescription("desc");
        recommendationRepository.save(rec2);

        List<Long> userIds = recommendationRepository.findUserIdsByResourceId(recurso.getId());

        assertThat(userIds).containsExactlyInAnyOrder(10L, 20L);
    }

    @Test
    void findByUserId_deveRetornarRecomendacoesPaginadasComRecursoCarregado() {
        Resource recurso = criarRecurso("Recurso Paginado", 1L);

        Recommendation rec = new Recommendation();
        rec.setUserId(7L);
        rec.setResource(recurso);
        rec.setDescription("desc");
        recommendationRepository.save(rec);

        var pagina = recommendationRepository.findByUserId(7L, PageRequest.of(0, 10));

        assertThat(pagina.getContent()).hasSize(1);
        // graças ao @EntityGraph(attributePaths = "resource"), o recurso já vem carregado
        assertThat(pagina.getContent().get(0).getResource().getName()).isEqualTo("Recurso Paginado");
    }

    @Test
    void deleteByResource_Id_deveRemoverTodasRecomendacoesVinculadasAoRecurso() {
        Resource recurso = criarRecurso("Recurso a ser removido", 1L);

        Recommendation rec1 = new Recommendation();
        rec1.setUserId(1L);
        rec1.setResource(recurso);
        rec1.setDescription("desc");
        recommendationRepository.save(rec1);

        Recommendation rec2 = new Recommendation();
        rec2.setUserId(2L);
        rec2.setResource(recurso);
        rec2.setDescription("desc");
        recommendationRepository.save(rec2);

        recommendationRepository.deleteByResource_Id(recurso.getId());

        List<Long> userIdsRestantes = recommendationRepository.findUserIdsByResourceId(recurso.getId());
        assertThat(userIdsRestantes).isEmpty();
    }

    @Test
    void existsByUserIdAndResource_Id_deveRespeitarConstraintDeUnicidade() {
        Resource recurso = criarRecurso("Recurso Único", 1L);

        Recommendation rec = new Recommendation();
        rec.setUserId(1L);
        rec.setResource(recurso);
        rec.setDescription("desc");
        recommendationRepository.save(rec);

        boolean existe = recommendationRepository.existsByUserIdAndResource_Id(1L, recurso.getId());
        boolean naoExiste = recommendationRepository.existsByUserIdAndResource_Id(99L, recurso.getId());

        assertThat(existe).isTrue();
        assertThat(naoExiste).isFalse();
    }
}
