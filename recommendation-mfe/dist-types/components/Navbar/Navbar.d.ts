import type { ReactNode } from 'react';
interface NavbarProps {
    title?: string;
    onMenuClick?: () => void;
    actions?: ReactNode;
}
export declare function Navbar({ title, onMenuClick, actions }: NavbarProps): import("react").JSX.Element;
export {};
