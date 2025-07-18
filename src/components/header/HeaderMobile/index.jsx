import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import './style.css';

export default function HeaderMobile({ items }) {
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
        >
          <ShoppingCart size={24} />
            <span className="header_mobile_cart_badge">cart</span>
          
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
      
      {/* Carrito móvil */}
      {cart.isCartOpen && (
        <div className="header_mobile_cart_drawer">
          <div className="header_mobile_cart_header">
            <h3>Your Cart</h3>
            <button onClick={() => cart.setIsCartOpen(false)}>
              <X size={24} />
            </button>
          </div>
          
          {cart.cartItems.length === 0 ? (
            <div className="header_mobile_cart_empty">Your cart is empty</div>
          ) : (
            <>
              <div className="header_mobile_cart_items">
                {cart.cartItems.map(item => (
                  <div key={item.id} className="header_mobile_cart_item">
                    <div className="header_mobile_cart_item_image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="header_mobile_cart_item_details">
                      <h4>{item.name}</h4>
                      <p>${item.price.toFixed(2)}</p>
                      <div className="header_mobile_cart_item_quantity">
                        <button 
                          onClick={() => cart.updateQuantity(item.id, item.quantity - 1)} 
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                    <button 
                      className="header_mobile_cart_item_remove" 
                      onClick={() => cart.removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="header_mobile_cart_footer">
                <div className="header_mobile_cart_total">
                  <span>Total:</span>
                  <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className="header_mobile_cart_checkout">Checkout</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}