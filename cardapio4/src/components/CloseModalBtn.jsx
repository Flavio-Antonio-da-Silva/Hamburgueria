// Caminho: src/components/CloseModalBtn.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CloseModalBtn() {
  const { toggleCart } = useContext(CartContext);

  return (
    <button
      onClick={toggleCart}
      className="text-gray-600 hover:text-gray-900 border px-4 py-2 rounded"
    >
      Fechar
    </button>
  );
}
