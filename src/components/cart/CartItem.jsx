import './cart.css'

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      </div>
      <button className="cart-item-remove" onClick={() => onRemove(item.id)}>
        ×
      </button>
    </div>
  )
}