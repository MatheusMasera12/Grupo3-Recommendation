package com.example.recommendation.service;

import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.HashSet;
import java.util.Set;

@Service
public class CacheService {

    private final StringRedisTemplate redisTemplate;

    public CacheService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void evictUserCache(Long userId) {
        if (userId == null) {
            return;
        }
        String pattern = "recommendations::" + userId + ":*";
        Set<String> keysToDelete = new HashSet<>();

        redisTemplate.execute((RedisConnection connection) -> {
            ScanOptions options = ScanOptions.scanOptions().match(pattern).count(100).build();
            try (Cursor<byte[]> cursor = connection.scan(options)) {
                cursor.forEachRemaining(key ->
                    keysToDelete.add(new String(key, StandardCharsets.UTF_8)));
            } catch (Exception e) {
                throw new RuntimeException("Erro ao varrer chaves do cache Redis", e);
            }
            return null;
        });

        if (!keysToDelete.isEmpty()) {
            redisTemplate.delete(keysToDelete);
        }
    }
}
