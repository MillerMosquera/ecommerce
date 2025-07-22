import { Star } from 'lucide-react';

const ProductCard = ({ product, viewMode }) => {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50" />);
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
        }

        return stars;
    };

    if (viewMode !== 'grid') {
        return (
            <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center pl-3">
                    <div className="relative flex-shrink-0">
                        <div className="w-32 h-32 bg-gray-100 rounded-l-lg flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-l-lg"
                            />
                        </div>
                        {product.season && (
                            <div className="absolute top-2 left-2 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                                {product.season}
                            </div>
                        )}
                    </div>

                    <div className="p-4 flex-1 flex justify-between">
                        <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                            <div className="flex items-center mb-2">
                                {renderStars(product.rating)}
                            </div>

                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                                )}
                            </div>

                            {product.discount && (
                                <div className="text-sm text-green-600 font-medium mb-2">{product.discount}</div>
                            )}
                        </div>
                        <div className="flex items-center">
                            <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors font-medium">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md border-1 hover:shadow-md transition-shadow">
            <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-t-lg"
                    />
                </div>
                {product.season && (
                    <div className="absolute top-2 left-2 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                        {product.season}
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                </div>
                <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                </div>
                {product.discount && (
                    <div className="text-sm text-green-600 font-medium mb-2">{product.discount}</div>
                )}
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors font-medium">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};
export default ProductCard;