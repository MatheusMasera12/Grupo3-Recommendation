import type { Resource, CreateResourceDto, UpdateResourceDto } from '@/types';
export declare function fetchResources(): Promise<Resource[]>;
export declare function createResource(dto: CreateResourceDto): Promise<Resource>;
export declare function updateResource(id: string, dto: UpdateResourceDto): Promise<Resource>;
export declare function deleteResource(id: string): Promise<void>;
