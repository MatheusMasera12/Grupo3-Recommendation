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
        String pattern = "recommendations::" + userId + ":*";
        try {
            redisTemplate.execute((RedisConnection connection) -> {
                try (Cursor<byte[]> cursor = connection.keyCommands().scan(
                        ScanOptions.scanOptions().match(pattern).count(1000).build())) {
                    while (cursor.hasNext()) {
                        connection.keyCommands().del(cursor.next());
                    }
                } catch (Exception e) {
                   
                }
                return null;
            });
        } catch (Exception e) {
           
        }
    }
}
