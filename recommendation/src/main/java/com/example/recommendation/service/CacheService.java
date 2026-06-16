package com.example.recommendation.service;

import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.Cursor;
import org.springframework.data.redis.core.ScanOptions;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

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
        // Invalidação por chave direta para as páginas mais acessadas (0 a 9)
        for (int i = 0; i < 10; i++) {
            redisTemplate.delete("recommendations::" + userId + ":" + i);
        }
    }
}
