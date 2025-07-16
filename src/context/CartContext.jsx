import { createContext, useContext, useState } from 'react';

// Cria o contexto
export const CartContext = createContext();

// Provider que envolve a aplicação
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [showAddressWarn, setShowAddressWarn] = useState(false);

  // Adiciona item ao carrinho
  const addToCart = (product) => {
    const exists = cartItems.find(item => item.name === product.name);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove item do carrinho
  const removeFromCart = (productName) => {
    setCartItems(cartItems.filter(item => item.name !== productName));
  };

  // A/re ou fecha o modal
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Calcula o total do carrinho
  const getTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Finaliza o pedido
  const checkout = () => {
    if (!address || address.trim().length < 5) {
      setShowAddressWarn(true);
      return;
    }

    alert(`Pedido finalizado! Endereço: ${address}`);
    setCartItems([]);
    setAddress('');
    setIsCartOpen(false);
    setShowAddressWarn(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        toggleCart,
        getTotal,
        address,
        setAddress,
        showAddressWarn,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
