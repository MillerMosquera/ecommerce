import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import './style.css';

export default function HeaderDesktop({ items, itemCount, onCartClick }) {
  const [state, setState] = useState(null);
  
  return (
    <>
      <nav className='header_container_left'>
        <ul className='header_items' onMouseLeave={() => setState(null)}>
          <li className='header_item header_logo-desktop'>
            <img src="https://storecomponents.vtexassets.com/arquivos/store-theme-logo.png" alt="Logo" />
          </li>

          {items?.map((item, index) => (
            <li 
              className='header_item' 
              onMouseOver={() => setState(index)}
              key={item.id}
            >
              {item.label}
              {state === index && item.submenu.length > 0 && (
                <ul className='header_submenu'>
                  {item.submenu.map((item2) => (
                    <li className='header_submenu_item' key={item2.url}>
                      <a href={item2.url}>{item2.label}</a>
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
        <button className='header_item header_sign_in'>SIGN IN</button>
        <div className="header_cart_container">
          <button 
            className='header_item header_cart_button'
            onClick={() => onCartClick && onCartClick()}
          >
            <ShoppingCart />
            {itemCount > 0 && (
              <span className="header_cart_badge">{itemCount}</span>
            )}        
          </button>
        </div>
      </div>
    </>
  )
}