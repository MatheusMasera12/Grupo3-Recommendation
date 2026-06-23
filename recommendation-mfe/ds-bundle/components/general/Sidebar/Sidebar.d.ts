import * as React from 'react';

/**
 * Sidebar — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface SidebarProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  items?: SidebarItem[];
  activeItemId?: string;
  footer?: React.ReactNode;
  width?: number;
}

export declare const Sidebar: React.ComponentType<SidebarProps>;
