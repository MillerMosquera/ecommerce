import React from 'react';
import ProductCard from './ProductCard';


const ProductsGrid = ({ products, viewMode }) => {


    return (
        <div className={`grid gap-6 ${viewMode === 'grid' ?
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'grid-cols-1'}`}
        >
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsGrid;