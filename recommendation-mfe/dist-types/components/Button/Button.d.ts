import type { ButtonProps as MuiButtonProps } from '@mui/material';
interface ButtonProps extends MuiButtonProps {
    loading?: boolean;
}
export declare function Button({ loading, disabled, children, ...props }: ButtonProps): import("react").JSX.Element;
export {};
