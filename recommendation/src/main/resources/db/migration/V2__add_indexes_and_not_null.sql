-- Índice composto para a query principal: findByCompetencyIdAndLevel
CREATE INDEX IF NOT EXISTS idx_resources_competency_level
    ON tb_resources (competency_id, level);

-- Índice para buscas de recomendações por usuário
CREATE INDEX IF NOT EXISTS idx_recommendations_user_id
    ON tb_recommendations (user_id);

-- Remover recomendações órfãs antes de aplicar NOT NULL (evita violação de constraint)
DELETE FROM tb_recommendations
WHERE user_id IS NULL OR resource_id IS NULL;

-- Remover recursos com dados obrigatórios ausentes
DELETE FROM tb_resources
WHERE name IS NULL OR url IS NULL OR competency_id IS NULL OR level IS NULL;

-- NOT NULL nas colunas obrigatórias de tb_resources
ALTER TABLE tb_resources
    ALTER COLUMN name SET NOT NULL,
    ALTER COLUMN url SET NOT NULL,
    ALTER COLUMN competency_id SET NOT NULL,
    ALTER COLUMN level SET NOT NULL;

-- NOT NULL nas colunas obrigatórias de tb_recommendations
ALTER TABLE tb_recommendations
    ALTER COLUMN user_id SET NOT NULL,
    ALTER COLUMN resource_id SET NOT NULL;
