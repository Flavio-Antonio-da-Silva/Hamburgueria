// Caminho: src/components/CartBtn.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartBtn() {
  const { toggleCart, cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={toggleCart}
      className="bg-white text-red-600 font-bold py-2 px-6 rounded shadow-lg hover:bg-gray-100 transition-all relative"
    >
      <i className="fa fa-shopping-cart mr-2"></i>
      Carrinho
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
          {totalItems}
        </span>
      )}
    </button>
  );
}
