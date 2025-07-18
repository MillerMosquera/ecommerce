import { ChevronLeft, ChevronRight, Minus, Plus, Star, X, } from "lucide-react";
import { useState } from "react";
import { products } from "../../data/products"
import SaleCard from "./SaleCard";

export default function Summer() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 4;
    const maxIndex = Math.max(0, products.length - slidesToShow);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }

    const openModal = (products) => {
        setSelectedProduct(products);
        setIsModalOpen(true);
        setQuantity(1);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    }

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    }

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    }

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of ${selectedProduct.name} to cart`);
        closeModal();
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(price);
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

    return (
        <section>
            <div className="max-w-6xl mx-auto p-6 bg-white">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-light text-gray-800 inline-block px-8 py-3 rounded-full">
                        Summer
                    </h2>
                </div>


                <div className="relative">

                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentIndex === 0
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                            }`}
                    >
                        <ChevronLeft size={20} />
                    </button>


                    <div className="overflow-hidden mx-12">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
                        >
                            {products.map((product) => (
                                <div key={product.id} className="w-1/4 flex-shrink-0 px-2">
                                    <div className="bg-white rounded-lg overflow-hidden group">

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
                                                            {formatPrice(product.price)}
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg font-semibold text-gray-900">
                                                        {formatPrice(product.price)}
                                                    </span>
                                                    {product.discount && (
                                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                                            {product.discount}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => openModal(product)}
                                                className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                                                ADD TO CART
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === maxIndex}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${currentIndex === maxIndex
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                            }`}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>


                <div className="flex justify-center mt-6 space-x-2">
                    {[...Array(maxIndex + 1)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && selectedProduct && (
                    <div
                        className="fixed inset-0 bg-black flex items-center justify-center z-50 p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">

                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex">

                                <div className="w-1/2 p-6">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                </div>


                                <div className="w-1/2 p-6 pt-12">
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-semibold text-gray-800">
                                            {selectedProduct.name}
                                        </h2>


                                        <div className="flex items-center space-x-1">
                                            {renderStars(selectedProduct.rating)}
                                        </div>

                                        <div className="text-3xl font-bold text-gray-900">
                                            {formatPrice(selectedProduct.price)}
                                        </div>

                                        {selectedProduct.price && (
                                            <div className="flex items-center space-x-2">
                                                <span className="text-gray-400 line-through text-lg">
                                                    {formatPrice(selectedProduct.price)}
                                                </span>
                                                {selectedProduct.discount && (
                                                    <span className="bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
                                                        {selectedProduct.discount}
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

                                                <span className="text-lg font-medium min-w-[80px] text-center">
                                                    {quantity} {selectedProduct.unit}
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
                                                    {formatPrice(selectedProduct.price * quantity)}
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
                                                onClick={closeModal}
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
                )}
            </div>
            <SaleCard/>
        </section>
    )
}