// Caminho: src/components/Address.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Address() {
  const { address, setAddress } = useContext(CartContext);

  return (
    <input
      type="text"
      placeholder="Digite seu endereço completo..."
      className="w-full text-black border border-gray-300 rounded px-3 py-2 mt-4 focus:outline-none focus:ring-2 focus:ring-red-500"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
    />
  );
}
