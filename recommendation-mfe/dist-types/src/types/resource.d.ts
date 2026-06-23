export type ResourceType = 'article' | 'video' | 'course' | 'book' | 'tool' | 'other';
export interface Resource {
    id: string;
    name: string;
    description: string;
    type: ResourceType;
    url?: string;
    tags?: string[];
    createdAt: string;
    updatedAt: string;
}
export interface CreateResourceDto {
    name: string;
    description: string;
    type: ResourceType;
    url?: string;
    tags?: string[];
}
export interface UpdateResourceDto {
    name?: string;
    description?: string;
    type?: ResourceType;
    url?: string;
    tags?: string[];
}
