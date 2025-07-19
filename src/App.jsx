import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import { SlidingCart } from './components/cart/components/SlidingCart';
import Accesorios from './pages/Accesorios';
import { useCart } from './components/cart/hooks/useCart';

function App() {
  const {
    isCartOpen,
    cartItems,
    totalItems,
    handleOpenCart,
    handleCloseCart,
    handleUpdateQuantity,
    handleRemoveItem,
    handleCheckout
  } = useCart();

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