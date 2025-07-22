// ✅ Obtener el carrito desde localStorage
export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  } catch (error) {
    console.error('Error retrieving cart:', error);
    return [];
  }
};

// ✅ Guardar el carrito en localStorage y notificar cambios
const saveCart = (cart) => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated')); // 🔔 Notifica cambios
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};

// ✅ Agregar producto al carrito (uno a la vez)
export const addToCart = (product, quantity = 1) => {
  if (!product || !product.id) {
    console.error('Producto inválido:', product);
    return false;
  }

  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingItemIndex > -1) {
    // Si ya existe, incrementar cantidad
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Si no existe, agregar nuevo item
    cart.push({ 
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      season: product.season,
      quantity: quantity
    });
  }

  saveCart(cart);
  window.dispatchEvent(new Event("cartUpdated")); 
  return true;
};

// ✅ Obtener la cantidad total de items
export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};

// ✅ Obtener el valor total del carrito
export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// ✅ Obtener todos los productos en el carrito
export const getCartItems = () => {
  return getCart();
};

// ✅ Eliminar un producto del carrito por ID
export const removeFromCart = (productId) => {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
};

// ✅ Actualizar la cantidad de un producto
export const updateCartQuantity = (productId, quantity) => {
  const cart = getCart().map(item => 
    item.id === productId ? { ...item, quantity } : item
  );
  saveCart(cart);
};

// ✅ Vaciar el carrito completamente
export const clearCart = () => {
  try {
    localStorage.removeItem('cart');
    window.dispatchEvent(new Event('cartUpdated'));
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
};
