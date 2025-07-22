import { ChevronLeft, ChevronRight, Minus, Plus, Star, X, } from "lucide-react";
import { useState } from "react";
import { products } from "../../data/products"
import SaleCard from "./SaleCard";
import { SummerCard } from "./components/SummerCard";
import { SummerModals } from "./components/SummerModals";

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
                                <SummerCard key={product.id} 
                                product={product} 
                                onOpenModal={openModal} />
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
               <SummerModals
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    product={selectedProduct}
                />
            </div>
            <SaleCard/>
        </section>
    )
}