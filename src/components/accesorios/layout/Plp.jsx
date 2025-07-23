import { useState } from "react";
import { brand, category, size } from "../../../data/filterOptions";
import { products } from "../../../data/products";
import { useFilters } from "../../../hooks/useFilters";
import ProductGrid from "../products/ProductGrid";
import SidebarFilters from "../products/SidebarFilter";
import ToolbarControls from "../products/ToolbarControls";
import { SummerModals } from "../../home/components/SummerModals";

export default function Plp(props) {
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
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    }

    let filtered = []


    if (props.subcategoria) {
        filtered = products.filter(item => item.categories === `${props.categoria}/${props.subcategoria}`)
    } else {
        filtered = products.filter(item =>
            item.categories?.startsWith(`${props.categoria}`))
    }

    const aSizes = size(filtered);
    const aCategories = category(filtered);
    const aBrands = brand(filtered);

    const filteredProducts = useFilters(
        filtered,
        selectedSizes,
        selectedCategories,
        selectedBrands,
        sortBy
    );

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
                <a href="/">🏠</a>
                <span>/</span>
                <a href={`/${props.title}`}>{props.title}</a>
                <span>/</span>
                {props.subcategoria ? <a href={`/${props.title}/${props.subcategoria}`}>{props.subcategoria}</a> : null}
            </div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">{props.subcategoria === undefined ? props.title.toUpperCase() : props.subcategoria.toUpperCase()}</h1>
            </div>
            <div className="flex gap-8">

                <SidebarFilters
                    sizes={aSizes}
                    categories={aCategories}
                    brands={aBrands}
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

                    <SummerModals
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        product={selectedProduct}
                    />
                </div>
            </div>
            {/* Aquí irían los componentes específicos de la tienda de ropa */}
        </div>


    );
}

