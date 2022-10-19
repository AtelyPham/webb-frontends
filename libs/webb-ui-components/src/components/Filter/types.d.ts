import { PropsOf, WebbComponentBase } from '@nepoche/webb-ui-components/types';

export interface FilterProps extends WebbComponentBase, PropsOf<'div'> {
  /**
   * The search text
   */
  searchText?: string;
  /**
   * Callback to control the search text
   */
  onSearchChange?: (nextValue: string | number) => void;
  /**
   * Clear all filters function
   */
  clearAllFilters?: () => void;
}