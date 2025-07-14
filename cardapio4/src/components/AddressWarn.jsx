// Caminho: src/components/AddressWarn.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function AddressWarn() {
  const { showAddressWarn } = useContext(CartContext);

  if (!showAddressWarn) return null;

  return (
    <p className="text-sm text-red-500 mt-1">
      Por favor, preencha um endereço válido (Rua, número, Bairro).
    </p>
  );
}
