// Caminho: src/components/CartItems.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartItems() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p className="text-center">Seu carrinho está vazio.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {cartItems.map((item) => (
        <li
          key={item.name}
          className="flex justify-between items-center border-b border-gray-200 py-2"
        >
          <div>
            <p className="font-bold">{item.name}</p>
            <p className="text-sm text-gray-600">
              {item.quantity} x R${item.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.name)}
            className="text-red-600 hover:text-red-800"
          >
            <i className="fa fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}
