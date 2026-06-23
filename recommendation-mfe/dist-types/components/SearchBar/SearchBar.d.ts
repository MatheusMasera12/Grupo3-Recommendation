interface SearchBarProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    debounceMs?: number;
    label?: string;
}
export declare function SearchBar({ placeholder, value: externalValue, onChange, onSearch, debounceMs, label, }: SearchBarProps): import("react").JSX.Element;
export {};
