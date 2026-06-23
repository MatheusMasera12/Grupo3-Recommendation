import * as React from 'react';

/**
 * SearchBar — from @grupo3/recommendation-mfe@1.0.0.
 */
export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  debounceMs?: number;
  label?: string;
}

export declare const SearchBar: React.ComponentType<SearchBarProps>;
