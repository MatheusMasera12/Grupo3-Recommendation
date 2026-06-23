import type { Recommendation } from '@/types';
interface RecommendationCardProps {
    recommendation: Recommendation;
    onSelect?: (id: string) => void;
}
export declare function RecommendationCard({ recommendation, onSelect }: RecommendationCardProps): import("react").JSX.Element;
export {};
