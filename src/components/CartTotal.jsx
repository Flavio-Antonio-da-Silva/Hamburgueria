// Caminho: src/components/CartTotal.jsx
import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";

export default function CartTotal() {
  const { cartItems } = useContext(CartContext);

  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const formatBRL = (v) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
      Number(v) || 0
    );

  return (
    <div className="text-right font-bold text-lg text-gray-800">
      Total do carrinho: {formatBRL(total)}
    </div>
  );
}
