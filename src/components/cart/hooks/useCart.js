// hooks/useCart.js
import { useState } from 'react';

export const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Custom Bell2',
      price: 450.23,
      quantity: 1,
      image: 'https://tommycolombia.vtexassets.com/arquivos/ids/1319220-800-auto?v=638863745828630000&width=800&height=auto&aspect=true '
    },
    {
      id: 2,
      name: 'Bells add-ons',
      price: 0,
      quantity: 1,
      image: 'https://greenforest.com.co/wp-content/uploads/2019/07/X0014SY5BX-1-600x600.jpeg',
      isFree: true
    }
  ]);

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