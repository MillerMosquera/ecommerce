import { useState } from "react";
import ProductGrid from "../products/ProductGrid";
import { useFilters } from "../../../hooks/useFilters";
import {products} from "../../../data/products";

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

    const filteredProducts = useFilters(
        products,
        selectedSizes,
        selectedCategories,
        selectedBrands,
        sortBy
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
                <span>🏠</span>
                <span>/</span>
                <span>Apparel Store</span>
            </div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Apparel & Accessories</h1>
            </div>
            <div className="flex gap-8">
                <div className="flex-1">

                    <ProductGrid
                        products={filteredProducts}
                        viewMode={viewMode}
                    />
                </div>
            </div>
            {/* Aquí irían los componentes específicos de la tienda de ropa */}
        </div>


    );
}