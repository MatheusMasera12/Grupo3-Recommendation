import type { Recommendation } from '@/types';
interface UseRecommendationsState {
    recommendations: Recommendation[];
    loading: boolean;
    error: string | null;
    refetch: () => void;
}
export declare function useRecommendations(userId?: string): UseRecommendationsState;
export {};
