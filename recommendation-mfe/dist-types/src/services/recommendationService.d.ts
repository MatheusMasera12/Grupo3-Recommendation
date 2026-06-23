import type { Recommendation } from '@/types';
export declare function fetchRecommendations(userId?: string): Promise<Recommendation[]>;
export declare function fetchRecommendationById(id: string): Promise<Recommendation>;
