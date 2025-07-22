  import { useEffect, useState } from 'react';

  export const useCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(() => {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    });

    // 🔁 Sincroniza cambios locales con localStorage
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // 🔔 Escucha cambios del carrito desde otras partes de la app
    useEffect(() => {
      const handleStorageChange = () => {
        const stored = localStorage.getItem("cart");
        setCartItems(stored ? JSON.parse(stored) : []);
      };

      window.addEventListener("cartUpdated", handleStorageChange);

      return () => {
        window.removeEventListener("cartUpdated", handleStorageChange);
      };
    }, []);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleOpenCart = () => setIsCartOpen(true);
    const handleCloseCart = () => setIsCartOpen(false);

    const handleUpdateQuantity = (id, newQuantity) => {
      const updated = newQuantity <= 0
        ? cartItems.filter(item => item.id !== id)
        : cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          );

      setCartItems(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated")); // 🔔
    };

    const handleRemoveItem = (id) => {
      const updated = cartItems.filter(item => item.id !== id);
      setCartItems(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
      window.dispatchEvent(new Event("cartUpdated")); // 🔔
    };

    const handleCheckout = () => {
      alert('Ir al checkout...');
      // setCartItems([]);
      // localStorage.removeItem("cart");
      // window.dispatchEvent(new Event("cartUpdated"));
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
