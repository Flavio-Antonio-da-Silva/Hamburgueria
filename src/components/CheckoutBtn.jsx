// Caminho: src/components/CheckoutBtn.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CheckoutBtn() {
  const { checkout } = useContext(CartContext);

  return (
    <button
      onClick={checkout}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
    >
      Finalizar Pedido
    </button>
  );
}
