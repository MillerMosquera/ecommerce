import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
//import Cart from './components/Cart';
import { SlidingCart } from './components/cart/components/SlidingCart';
import Accesorios from './pages/Accesorios';

function App() {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        itemCount={totalItems}
        onCartClick={handleOpenCart}
      />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accesorios" element={<Accesorios />} />
        </Routes>
      </main>
      <Footer />
      
      <SlidingCart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={handleCloseCart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;