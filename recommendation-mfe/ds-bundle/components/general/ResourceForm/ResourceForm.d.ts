import * as React from 'react';

/**
 * ResourceForm — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface ResourceFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (dto: CreateResourceDto) => Promise<void>;
  resource?: any;
}

export declare const ResourceForm: React.ComponentType<ResourceFormProps>;
