interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
}
export declare function SearchBar({ placeholder, value: externalValue, onChange, onSearch, }: SearchBarProps): import("react").JSX.Element;
export {};
