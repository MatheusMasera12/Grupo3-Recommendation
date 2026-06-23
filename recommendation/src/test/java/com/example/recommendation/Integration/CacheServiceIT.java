package com.example.recommendation.integration;

import com.example.recommendation.service.CacheService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;

import java.time.Duration;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Testa o CacheService contra uma instância real de Redis (via Testcontainers),
 * confirmando que evictUserCache de fato localiza e remove apenas as chaves
 * pertencentes ao usuário informado (usando o padrão "recommendations::{userId}:*").
 */
@SpringBootTest
class CacheServiceIT extends AbstractIntegrationTest {

    @Autowired
    private CacheService cacheService;

    @Autowired
    private StringRedisTemplate redisTemplate;

    @AfterEach
    void limparRedis() {
        redisTemplate.getConnectionFactory().getConnection().flushAll();
    }

    @Test
    void evictUserCache_deveRemoverApenasChavesDoUsuarioInformado() {
        redisTemplate.opsForValue().set("recommendations::1:page0", "dados-usuario-1", Duration.ofMinutes(5));
        redisTemplate.opsForValue().set("recommendations::1:page1", "dados-usuario-1-pagina2", Duration.ofMinutes(5));
        redisTemplate.opsForValue().set("recommendations::2:page0", "dados-usuario-2", Duration.ofMinutes(5));

        cacheService.evictUserCache(1L);

        assertThat(redisTemplate.hasKey("recommendations::1:page0")).isFalse();
        assertThat(redisTemplate.hasKey("recommendations::1:page1")).isFalse();
        assertThat(redisTemplate.hasKey("recommendations::2:page0")).isTrue();
    }

    @Test
    void evictUserCache_naoDeveLancarErro_quandoNaoHaChavesParaOUsuario() {
        // Garante que o cenário "nada para remover" é tratado de forma segura
        cacheService.evictUserCache(999L);

        Set<String> chaves = redisTemplate.keys("recommendations::999:*");
        assertThat(chaves).isEmpty();
    }

    @Test
    void evictUserCache_naoDeveLancarErro_quandoUserIdNulo() {
        cacheService.evictUserCache(null);
        // comportamento esperado: método retorna sem tentar acessar o Redis
    }
}
