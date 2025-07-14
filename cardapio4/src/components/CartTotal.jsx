// Caminho: src/components/CartTotal.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartTotal() {
  const { getTotal } = useContext(CartContext);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Total:</h3>
      <p className="text-xl font-bold text-green-600">
        R${getTotal().toFixed(2)}
      </p>
    </div>
  );
}
