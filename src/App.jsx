import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
//import Cart from './components/Cart';
import Accesorios from './pages/Accesorios';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accesorios" element={<Accesorios />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;