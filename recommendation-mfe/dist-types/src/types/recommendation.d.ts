import type { Resource } from './resource';
export interface Recommendation {
    id: string;
    resourceId: string;
    resource?: Resource;
    score: number;
    reason: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
}
