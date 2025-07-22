
export const getCart = () => {
    try {
        return JSON.parse(localStorage.getItem('cart') || '[]');
    } catch (error) {
        console.error('Error retrieving cart:', error);
        return [];
    }
}

const saveCart = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

// Agregar producto al carrito (solo UN producto)
export const addToCart = (product, quantity = 1) => {
    // Validar que sea un solo producto
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
    return true;
};

// Obtener cantidad total de items
export const getCartCount = () => {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
};

// Obtener total del carrito
export const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Obtener todos los items del carrito
export const getCartItems = () => {
    return getCart();
};
