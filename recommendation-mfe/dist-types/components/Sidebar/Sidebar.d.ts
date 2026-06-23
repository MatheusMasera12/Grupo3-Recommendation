import type { ReactNode } from 'react';
export interface SidebarItem {
    id: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
}
interface SidebarProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    items?: SidebarItem[];
    activeItemId?: string;
    footer?: ReactNode;
    width?: number;
}
export declare function Sidebar({ open, onClose, title, items, activeItemId, footer, width, }: SidebarProps): import("react").JSX.Element;
export {};
