import * as React from 'react';

/**
 * Navbar — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface NavbarProps {
  title?: string;
  onMenuClick?: () => void;
  actions?: React.ReactNode;
}

export declare const Navbar: React.ComponentType<NavbarProps>;
