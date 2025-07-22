import { ChevronDown } from 'lucide-react';
import FilterSection from './FilterSection';

export const SidebarFilters = ({
    sizes,
    categories,
    brands,
    selectedSizes,
    selectedCategories,
    selectedBrands,
    expandedFilters,
    toggleFilter,
    toggleFilterExpansion
}) => {
    return (
        <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Filtros</h2>

                <FilterSection
                    title="Talla"
                    items={sizes}
                    filterType="size"
                    selectedItems={selectedSizes}
                    expandedFilters={expandedFilters}
                    toggleFilter={toggleFilter}
                    toggleFilterExpansion={toggleFilterExpansion}
                />

                <FilterSection
                    title="Categoría"
                    items={categories}
                    filterType="category"
                    selectedItems={selectedCategories}
                    expandedFilters={expandedFilters}
                    toggleFilter={toggleFilter}
                    toggleFilterExpansion={toggleFilterExpansion}
                />

                <FilterSection
                    title="Marca"
                    items={brands}
                    filterType="brand"
                    selectedItems={selectedBrands}
                    expandedFilters={expandedFilters}
                    toggleFilter={toggleFilter}
                    toggleFilterExpansion={toggleFilterExpansion}
                />
            </div>
        </div>
    );
};

export default SidebarFilters;