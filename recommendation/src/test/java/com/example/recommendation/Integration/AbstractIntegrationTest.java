package com.example.recommendation.integration;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.GenericContainer;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.utility.DockerImageName;

/**
 * Classe base para os testes de integração que precisam de banco de dados
 * e/ou cache reais.
 *
 * Sobe um container PostgreSQL (mesma versão usada em compose.yaml) e um
 * container Redis via Testcontainers. As propriedades de conexão são
 * sobrescritas dinamicamente, então NÃO é necessário ter Postgres na porta
 * 5433 nem Redis rodando localmente — o Testcontainers cuida de tudo.
 *
 * Requisito: Docker (ou Docker-compatible runtime) disponível na máquina/CI
 * que executa os testes.
 *
 * As subclasses devem usar @SpringBootTest (ou @DataJpaTest, com os ajustes
 * de propriedade equivalentes) e estender esta classe para reaproveitar os
 * containers já configurados.
 */
@Testcontainers
public abstract class AbstractIntegrationTest {

    static final PostgreSQLContainer<?> POSTGRES =
            new PostgreSQLContainer<>(DockerImageName.parse("postgres:16"))
                    .withDatabaseName("recommendation")
                    .withUsername("recommendation")
                    .withPassword("recommendation");

    static final GenericContainer<?> REDIS =
            new GenericContainer<>(DockerImageName.parse("redis:7-alpine"))
                    .withExposedPorts(6379);

    @BeforeAll
    static void startContainers() {
        POSTGRES.start();
        REDIS.start();
    }

    @AfterAll
    static void stopContainers() {
        POSTGRES.stop();
        REDIS.stop();
    }

    @DynamicPropertySource
    static void overrideProperties(DynamicPropertyRegistry registry) {
        // Datasource real apontando para o container, não para localhost:5433
        registry.add("spring.datasource.url", POSTGRES::getJdbcUrl);
        registry.add("spring.datasource.username", POSTGRES::getUsername);
        registry.add("spring.datasource.password", POSTGRES::getPassword);

        // Redis real apontando para o container
        registry.add("spring.data.redis.host", REDIS::getHost);
        registry.add("spring.data.redis.port", () -> REDIS.getMappedPort(6379));

        // Garante que o Flyway aplique as migrations reais (V1, V2) no container
        registry.add("spring.flyway.enabled", () -> "true");
        registry.add("spring.jpa.hibernate.ddl-auto", () -> "validate");

        // Evita que o Spring Boot tente subir o docker-compose.yml do projeto
        registry.add("spring.docker.compose.enabled", () -> "false");
    }
}
