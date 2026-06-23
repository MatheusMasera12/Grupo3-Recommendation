import type { Resource } from '@/types';
interface ResourceListProps {
    resources: Resource[];
    loading: boolean;
    error: string | null;
    onAdd: () => void;
    onEdit: (resource: Resource) => void;
    onDelete: (id: string) => Promise<void>;
    onRetry?: () => void;
}
export declare function ResourceList({ resources, loading, error, onAdd, onEdit, onDelete, onRetry, }: ResourceListProps): import("react").JSX.Element;
export {};
