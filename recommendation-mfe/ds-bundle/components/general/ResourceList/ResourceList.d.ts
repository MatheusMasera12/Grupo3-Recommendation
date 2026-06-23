import * as React from 'react';

/**
 * ResourceList — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface ResourceListProps {
  resources: Resource[];
  loading: boolean;
  error: string;
  onAdd: () => void;
  onEdit: (resource: Resource) => void;
  onDelete: (id: string) => Promise<void>;
  onRetry?: () => void;
}

export declare const ResourceList: React.ComponentType<ResourceListProps>;
