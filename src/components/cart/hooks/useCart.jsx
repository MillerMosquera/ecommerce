// hooks/useCart.jsx
import { useState } from 'react';
import {getCart} from '../utils/cartUtils';

export const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = getCart();

  const [setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Guardar el carrito en localStorage cada vez que cambia
 

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Ir al checkout...');
    // Opcional: limpiar carrito después del checkout
    // setCartItems([]);
    // localStorage.removeItem("carrito");
  };

  return {
    isCartOpen,
    cartItems,
    totalItems,
    handleOpenCart,
    handleCloseCart,
    handleUpdateQuantity,
    handleRemoveItem,
    handleCheckout
  };
};
