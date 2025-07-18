import { useMemo } from 'react';

export const useFilters = (products, selectedSizes, selectedCategories, selectedBrands, sortBy) => {
  return useMemo(() => {
    let filtered = products;

    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product => 
        product.size.some(size => selectedSizes.includes(size))
      );
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }

    // Sorting
    if (sortBy === 'PRICE_LOW') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'PRICE_HIGH') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'RATING') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [products, selectedSizes, selectedCategories, selectedBrands, sortBy]);
};