import ProductCard from './ProductCard';

const ProductsGrid = ({ products, viewMode, openModal }) => {

    return (
        <div className={`${viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
            : 'space-y-4'
            }`}>
            {products.map(product => (
                <div key={product.id} className={viewMode === 'grid' ? '' : 'w-full'}>
                    <ProductCard product={product} viewMode={viewMode} 
                    openModal={openModal}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductsGrid;