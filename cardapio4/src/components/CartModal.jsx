// Caminho: src/components/CartModal.jsx

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartModal({ children }) {
  const { isCartOpen } = useContext(CartContext);

  if (!isCartOpen) return null;

  return (
    <div className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
      <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
        <h2 className="text-black text-center mb-2 text-2xl font-bold">Meu Carrinho</h2>
        {children}
      </div>
    </div>
  );
}
