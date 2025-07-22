import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './style.css';

export default function HeaderDesktop({ items, onCartClick }) {
  const [hovered, setHovered] = useState(null);
  const [totalItems, setTotalItems] = useState(0);

  // ✅ Leer el carrito desde localStorage al cargar el componente
  useEffect(() => {
    const updateCartCount = () => {
      const stored = JSON.parse(localStorage.getItem("cart")) || [];
      const count = stored.reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(count);
    };

    updateCartCount(); // Llamar al iniciar

    // ✅ Escuchar cambios del carrito a través del evento personalizado
    window.addEventListener("cartUpdated", updateCartCount);

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <>
      <nav className='header_container_left'>
        <ul className='header_items' onMouseLeave={() => setHovered(null)}>
          <li className='header_item header_logo-desktop'>
            <img
              src="https://storecomponents.vtexassets.com/arquivos/store-theme-logo.png"
              alt="Logo"
            />
          </li>

          {items?.map((item, index) => (
            <li
              className='header_item'
              onMouseOver={() => setHovered(index)}
              key={item.id}
            >
              <Link to={item.url}>
                <button>{item.label}</button>
              </Link>
              {hovered === index && item.submenu.length > 0 && (
                <ul className='header_submenu'>
                  {item.submenu.map((sub) => (
                    <li className='header_submenu_item' key={sub.url}>
                      <Link to={sub.url}>
                        <button>{sub.label}</button>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="header_container_right">
        <div className="header_container_search">
          <input
            className='header_item header_input_search'
            type="text"
            placeholder="Buscar"
          />
          <button className='header_button_search'>
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </div>

        <button className='header_item header_sign_in'>Iniciar sesión</button>

        <div className="header_cart_container">
          <button
            className='header_item header_cart_button'
            onClick={onCartClick}
          >
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="header_cart_badge">{totalItems}</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
