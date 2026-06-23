import type { CardProps as MuiCardProps } from '@mui/material';
import type { ReactNode } from 'react';
interface CardProps extends MuiCardProps {
    title?: string;
    subtitle?: string;
    actions?: ReactNode;
    children?: ReactNode;
}
export declare function Card({ title, subtitle, actions, children, ...props }: CardProps): import("react").JSX.Element;
export {};
