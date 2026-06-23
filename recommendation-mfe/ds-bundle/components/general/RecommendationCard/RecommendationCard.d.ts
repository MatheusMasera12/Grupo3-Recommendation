import * as React from 'react';

/**
 * RecommendationCard — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface RecommendationCardProps {
  recommendation: Recommendation;
  onSelect?: (id: string) => void;
}

export declare const RecommendationCard: React.ComponentType<RecommendationCardProps>;
