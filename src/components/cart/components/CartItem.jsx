import { Minus, Plus, Trash2 } from 'lucide-react';

export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const handleIncrease = () => onUpdateQuantity(item.id, item.quantity + 1);
  const handleDecrease = () => onUpdateQuantity(item.id, item.quantity - 1);
  const handleRemove = () => onRemove(item.id);

  return (
    <div className="flex items-start space-x-4 border-b border-gray-100 pb-6 mb-4">
      {/* Product Image */}
      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              KAWASAKI
            </p>
            <h3 className="text-sm font-medium text-gray-900 mt-1">
              {item.name}
            </h3>
          </div>
          <button
            onClick={handleRemove}
            className="text-gray-400 hover:text-gray-600 ml-2"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Quantity and Price */}
        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            {item.isFree ? (
              <span className="text-sm text-green-600 font-medium">FREE</span>
            ) : (
              <span className="text-sm font-semibold text-gray-900">
                ${item.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
