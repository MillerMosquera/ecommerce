import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import { SlidingCart } from './components/cart/components/SlidingCart';
import Accesorios from './pages/Accesorios';
import WrapCategories from './pages/WrapCategories';
import NotFoundPage from './pages/NotFoundPage';
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
          <Route path="/ropa-accesorios/:subcategoria?" element={<WrapCategories title="Ropa y accesorios" categoria="ropa-accesorios" />} />
          <Route path="/hogar-decoracion/:subcategoria?" element={<WrapCategories title="Hogar y decoración"  categoria="hogar-decoracion"/>} />
          <Route path="*" element={<NotFoundPage />} />
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