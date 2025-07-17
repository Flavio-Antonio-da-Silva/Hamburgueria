// Caminho: src/components/Header.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Endereco from "./Endereco";

// Imagens
import bg from "../assets/bg.png";
import logo from "../assets/hamb-1.png";

export default function Header() {
  const { toggleCart } = useContext(CartContext);

  return (
    <header
      className="w-full text-white px-4 py-6 flex flex-col items-center justify-center fixed top-0 left-0 z-50 shadow-md bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Botão Carrinho */}
      <button
        onClick={toggleCart}
        className="absolute right-4 top-4 bg-white text-red-600 p-2 rounded-full shadow hover:scale-105 transition-transform"
        aria-label="Abrir carrinho"
      >
        <i className="fa-solid fa-cart-shopping text-lg"></i>
      </button>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo da Hamburgueria"
        className="w-20 h-20 object-contain mb-2"
      />

      {/* Nome da Hamburgueria */}
      <h1 className="text-2xl font-extrabold drop-shadow-md">Hamburgueria</h1>

      {/* Endereço centralizado */}
      <Endereco />

      {/* Horário de funcionamento */}
      <p className="text-sm mt-2 drop-shadow-md">Seg. à Dom. 18:00 às 22:00</p>
    </header>
  );
}
