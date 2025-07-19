import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import './style.css';

export default function HeaderMobile({ items, itemCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="header_mobile_container">
      <button 
        className="header_mobile_menu_button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className="header_mobile_logo">
        <img 
          src="https://storecomponents.vtexassets.com/arquivos/store-theme-logo.png" 
          alt="Logo" 
          width={120}
        />
      </div>
      
      <div className="header_mobile_cart">
        <button 
          className="header_mobile_cart_button"
          onClick={() => onCartClick && onCartClick()}
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="header_mobile_cart_badge">{itemCount}</span>
          )}
        </button>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="header_mobile_menu">
          <ul>
            {items.map((item) => (
              <li key={item.id} className="header_mobile_menu_item">
                <a href={item.url}>{item.label}</a>
                {item.submenu.length > 0 && (
                  <ul className="header_mobile_submenu">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.url}>
                        <a href={subItem.url}>{subItem.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}