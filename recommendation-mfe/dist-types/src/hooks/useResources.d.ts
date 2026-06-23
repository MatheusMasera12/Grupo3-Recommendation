import type { Resource, CreateResourceDto, UpdateResourceDto } from '@/types';
interface UseResourcesState {
    resources: Resource[];
    loading: boolean;
    error: string | null;
    create: (dto: CreateResourceDto) => Promise<void>;
    update: (id: string, dto: UpdateResourceDto) => Promise<void>;
    remove: (id: string) => Promise<void>;
    refetch: () => void;
}
export declare function useResources(): UseResourcesState;
export {};
