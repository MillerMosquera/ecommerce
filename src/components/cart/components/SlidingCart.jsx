import { X } from 'lucide-react';
import { CartItem } from './CartItem';

export const SlidingCart = ({ 
  isOpen, 
  items, 
  onClose, 
  onUpdateQuantity, 
  onRemove, 
  onCheckout 
}) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-20 z-[45] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-[50] transform transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Cart Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </div>

        {/* Cart Footer */}
        <div className="border-t bg-white p-6 space-y-4 mt-auto">
          {/* Totals */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span className="text-blue-600">${subtotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Shipping Info */}
          <p className="text-sm text-blue-600">
            Shipping and taxes calculated in the Cart
          </p>

          {/* Checkout Button */}
          <button 
            onClick={onCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};