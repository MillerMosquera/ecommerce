import { Star } from "lucide-react";

export const SummerCard = ({ product, onOpenModal }) => {

    const handleAddToCart = (e) => {
        e.stopPropagation();
        onOpenModal && onOpenModal(product);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={12}
                className={`${index < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                    }`}
            />
        ));
    };
    return (
        <div
            className="w-1/4 flex-shrink-0 px-2 bg-white rounded-lg overflow-hidden group p-6"
            onClick={() => onOpenModal && onOpenModal(product)}
        >
            <div key={product.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-4">

                    <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                        {product.category && (
                            <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                                {product.category}
                            </span>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium text-gray-800 text-sm">
                            {product.name}
                        </h3>
                        <div className="flex items-center space-x-1">
                            {renderStars(product.rating)}
                        </div>
                        <div className="space-y-1">
                            {product.price && (
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-400 line-through text-sm">
                                        {product.price}
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center space-x-2">
                                <span className="text-lg font-semibold text-gray-900">
                                    {product.price}
                                </span>
                                {product.discount && (
                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                        {product.discount}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                            Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}