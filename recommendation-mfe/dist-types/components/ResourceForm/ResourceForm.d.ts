import type { Resource, CreateResourceDto } from '@/types';
interface ResourceFormProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (dto: CreateResourceDto) => Promise<void>;
    resource?: Resource | null;
}
export declare function ResourceForm({ open, onClose, onSubmit, resource }: ResourceFormProps): import("react").JSX.Element;
export {};
