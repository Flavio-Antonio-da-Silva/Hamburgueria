// Caminho: src/components/Header.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Endereco from "../src/components/Endereco";

export default function Header() {
  const { toggleCart } = useContext(CartContext);

  return (
    <header className="w-full bg-red-600 text-white px-4 py-4 flex flex-col items-center fixed top-0 left-0 z-50 shadow-md">
      {/* Nome da Hamburgueria */}
      <h1 className="text-2xl font-extrabold">Hamburgueria</h1>

      {/* Endereço centralizado */}
      <Endereco />

      {/* Horário de funcionamento */}
      <p className="text-sm mt-2">Seg. à Dom. 18:00 às 22:00</p>

      {/* Botão Carrinho (fixo no topo, canto direito) */}
      <button
        onClick={toggleCart}
        className="absolute right-4 top-4 bg-white text-red-600 p-2 rounded-full shadow hover:scale-105 transition-transform"
        aria-label="Abrir carrinho"
      >
        <i className="fa-solid fa-cart-shopping text-lg"></i>
      </button>
    </header>
  );
}
