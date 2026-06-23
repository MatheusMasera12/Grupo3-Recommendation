package com.example.recommendation.Integration;

import com.example.recommendation.dtos.AssessmentTriggerDTO;
import com.example.recommendation.dtos.ResourceDTO;
import com.example.recommendation.model.ResourceLevel;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.test.context.TestPropertySource;

import java.time.Instant;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Teste de integração ponta-a-ponta: sobe a aplicação completa em uma porta
 * aleatória, com PostgreSQL e Redis reais (via AbstractIntegrationTest), e
 * exercita o fluxo real via HTTP:
 *
 *   1. Cadastra um recurso (ADMIN)
 *   2. Aciona a geração de recomendação para um usuário (ADMIN)
 *   3. Confirma que a recomendação aparece ao consultar como o próprio usuário
 *
 * Em vez de depender do auth service real (auth.service.url), este teste
 * substitui o JwtDecoder por uma implementação de teste que aceita tokens
 * fabricados localmente — assim não é necessário nenhum serviço de
 * autenticação rodando para o teste funcionar.
 */
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
        "spring.security.oauth2.resourceserver.jwt.issuer-uri=",
        "spring.security.oauth2.resourceserver.jwt.jwk-set-uri="
})
class RecommendationFlowIT extends AbstractIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ObjectMapper objectMapper;

    @TestConfiguration
    static class TestJwtConfig {
        /**
         * Substitui o JwtDecoder real (que validaria contra o auth service)
         * por um decoder de teste que aceita qualquer token gerado por
         * fakeJwtFor(...) abaixo, sem validação de assinatura.
         */
        @Bean
        JwtDecoder jwtDecoder() {
            return token -> {
                // O "token" de teste é, na prática, o próprio subject + role
                // codificados em um formato simples: "subject|role"
                String[] parts = token.split("\\|");
                String subject = parts[0];
                String role = parts.length > 1 ? parts[1] : "USER";

                return Jwt.withTokenValue(token)
                        .header("alg", "none")
                        .subject(subject)
                        .claim("role", List.of(role))
                        .issuedAt(Instant.now())
                        .expiresAt(Instant.now().plusSeconds(3600))
                        .build();
            };
        }
    }

    private HttpHeaders headersComToken(String userId, String role) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(userId + "|" + role);
        return headers;
    }

    @Test
    void fluxoCompleto_cadastrarRecursoGerarRecomendacaoEConsultar() {
        // 1. ADMIN cadastra um recurso para a competência 1, nível BEGINNER
        ResourceDTO novoRecurso = new ResourceDTO();
        novoRecurso.setName("Curso introdutório de testes");
        novoRecurso.setDescription("Conteúdo básico sobre testes automatizados");
        novoRecurso.setUrl("https://exemplo.com/curso-testes");
        novoRecurso.setCompetencyId(1L);
        novoRecurso.setLevel(ResourceLevel.BEGINNER);

        HttpEntity<ResourceDTO> requestCriarRecurso = new HttpEntity<>(novoRecurso, headersComToken("1", "ADMIN"));
        ResponseEntity<ResourceDTO> respostaRecurso = restTemplate.postForEntity(
                "/api/resources", requestCriarRecurso, ResourceDTO.class);

        assertThat(respostaRecurso.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        assertThat(respostaRecurso.getBody()).isNotNull();
        assertThat(respostaRecurso.getBody().getId()).isNotNull();

        // 2. ADMIN aciona a geração de recomendação para o usuário 42
        AssessmentTriggerDTO trigger = new AssessmentTriggerDTO();
        trigger.setUserId(42L);
        trigger.setCompetencyId(1L);
        trigger.setLevel(ResourceLevel.BEGINNER);

        HttpEntity<AssessmentTriggerDTO> requestGerar = new HttpEntity<>(trigger, headersComToken("1", "ADMIN"));
        ResponseEntity<Void> respostaGerar = restTemplate.postForEntity(
                "/api/recommendations/evaluate", requestGerar, Void.class);

        assertThat(respostaGerar.getStatusCode()).isEqualTo(HttpStatus.CREATED);

        // 3. O próprio usuário 42 consulta suas recomendações e encontra a gerada
        HttpEntity<Void> requestConsultar = new HttpEntity<>(headersComToken("42", "USER"));
        ResponseEntity<Map> respostaConsulta = restTemplate.exchange(
                "/api/recommendations/user/42", HttpMethod.GET, requestConsultar, Map.class);

        assertThat(respostaConsulta.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(respostaConsulta.getBody()).isNotNull();
        List<?> conteudo = (List<?>) respostaConsulta.getBody().get("content");
        assertThat(conteudo).isNotEmpty();
    }

    @Test
    void usuarioComum_naoDeveConseguirConsultarRecomendacoesDeOutroUsuario() {
        HttpEntity<Void> request = new HttpEntity<>(headersComToken("1", "USER"));

        ResponseEntity<String> response = restTemplate.exchange(
                "/api/recommendations/user/2", HttpMethod.GET, request, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.FORBIDDEN);
    }

    @Test
    void usuarioComum_naoDeveConseguirCadastrarRecurso() {
        ResourceDTO novoRecurso = new ResourceDTO();
        novoRecurso.setName("Tentativa não autorizada");
        novoRecurso.setUrl("https://exemplo.com/x");
        novoRecurso.setCompetencyId(1L);
        novoRecurso.setLevel(ResourceLevel.BEGINNER);

        HttpEntity<ResourceDTO> request = new HttpEntity<>(novoRecurso, headersComToken("1", "USER"));
        ResponseEntity<String> response = restTemplate.postForEntity("/api/resources", request, String.class);

        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.FORBIDDEN);
    }
}
