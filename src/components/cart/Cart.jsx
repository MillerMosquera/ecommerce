import { useState } from "react";
import Header from "../header/Header.jsx";
import { SlidingCart } from "./components/SlidingCart.jsx";

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Custom Bell2',
      price: 450.23,
      quantity: 1,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Bells add-ons',
      price: 0,
      quantity: 1,
      image: '/api/placeholder/60/60',
      isFree: true
    }
  ]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenCart = () => setIsCartOpen(true);


  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        itemCount={totalItems}
        onCartClick={handleOpenCart}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bienvenido a nuestra tienda</h2>
          <p className="text-gray-600">Haz clic en el ícono del carrito para ver tus productos</p>
        </div>
      </main>
    </div>
  );
};

export default Cart;