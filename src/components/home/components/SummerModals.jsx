import { useState } from "react";
import { addToCart } from "../../cart/utils/cartUtils";
import { Minus, Plus, Star, X, } from "lucide-react";

export const SummerModals = ({ isOpen, product, onClose }) => {

    const [quantity, setQuantity] = useState(1);

    if (!isOpen || !product) return null;
    const handleAddToCart = () => {
        const success = addToCart(product, quantity);
        if (success) {
            alert(`✅ ${product.name} agregado al carrito`);
            onClose();
        }
    }

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

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);


    return (
        <div
            className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="flex">

                    <div className="w-1/2 p-6">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                    </div>


                    <div className="w-1/2 p-6 pt-12">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {product.name}
                            </h2>


                            <div className="flex items-center space-x-1">
                                {renderStars(product.rating)}
                            </div>

                            <div className="text-3xl font-bold text-gray-900">
                                {product.price}
                            </div>

                            {product.price && (
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-400 line-through text-lg">
                                        {product.price}
                                    </span>
                                    {product.discount && (
                                        <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                                            {product.discount}
                                        </span>
                                    )}
                                </div>
                            )}
                            <hr className="border-gray-200" />


                            <div className="flex items-center space-x-4">
                                <span className="text-sm font-medium text-gray-700">Cantidad:</span>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={decrementQuantity}
                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center  hover:bg-gray-50 transition-colors"
                                    >
                                        <Minus size={14} className=" text-gray-800" />
                                    </button>

                                    <span className="text-lg font-medium min-w-[80px] text-center text-black">
                                        {quantity} {product.unit}
                                    </span>

                                    <button
                                        onClick={incrementQuantity}
                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                    >
                                        <Plus size={14} className=" text-gray-800" />
                                    </button>
                                </div>
                            </div>


                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">Total:</span>
                                    <span className="text-2xl font-bold text-gray-900">
                                        {product.price * quantity}
                                    </span>
                                </div>
                            </div>


                            <div className="space-y-3 pt-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Agregar al Carrito
                                </button>

                                <button
                                    onClick={onClose}
                                    className="w-full bg-gray-100 text-gray-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                                >
                                    Continuar Comprando
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}