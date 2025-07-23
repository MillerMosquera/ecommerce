import { useState } from "react";
import { brand, category, size } from "../../../data/filterOptions";
import { products } from "../../../data/products";
import { useFilters } from "../../../hooks/useFilters";
import ProductGrid from "../products/ProductGrid";
import SidebarFilters from "../products/SidebarFilter";
import ToolbarControls from "../products/ToolbarControls";

export default function ApparelStore() {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [sortBy, setSortBy] = useState('RELEVANCE');
    const [expandedFilters, setExpandedFilters] = useState({
        size: true,
        category: true,
        brand: true,
        test: true,
        subcategory: true
    });
    const [ setSelectedProduct] = useState(null);
    const [ setIsModalOpen] = useState(false);
    const [ setQuantity] = useState(1);

    const filteredProducts = useFilters(
        products,
        selectedSizes,
        selectedCategories,
        selectedBrands,
        sortBy
    );

    const openModal = (products) => {
        setSelectedProduct(products);
        setIsModalOpen(true);
        setQuantity(1);
    }



    const toggleFilter = (filterType, value) => {
        const setters = {
            size: setSelectedSizes,
            category: setSelectedCategories,
            brand: setSelectedBrands
        };

        const currentValues = {
            size: selectedSizes,
            category: selectedCategories,
            brand: selectedBrands
        };

        const setter = setters[filterType];
        const current = currentValues[filterType];

        if (current.includes(value)) {
            setter(current.filter(item => item !== value));
        } else {
            setter([...current, value]);
        }
    };

    const toggleFilterExpansion = (filterType) => {
        setExpandedFilters(prev => ({
            ...prev,
            [filterType]: !prev[filterType]
        }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                <span>🏠</span>
                <span>/</span>
                <span>Tienda de moda </span>
            </div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Ropa y Accesorios </h1>
            </div>
            <div className="flex gap-8">

                <SidebarFilters
                    sizes={size}
                    categories={category}
                    brands={brand}
                    selectedSizes={selectedSizes}
                    selectedCategories={selectedCategories}
                    selectedBrands={selectedBrands}
                    expandedFilters={expandedFilters}
                    toggleFilter={toggleFilter}
                    toggleFilterExpansion={toggleFilterExpansion}
                />

                <div className="flex-1">
                    <ToolbarControls
                        productsCount={filteredProducts.length}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                    />

                    <ProductGrid
                        products={filteredProducts}
                        viewMode={viewMode}
                        openModal={openModal}
                    />
                </div>

            </div>
            {/* Aquí irían los componentes específicos de la tienda de ropa */}
        </div>


    );
}