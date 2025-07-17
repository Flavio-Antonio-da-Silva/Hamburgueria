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
      className="
        w-full text-white
        flex flex-col items-center justify-center
        fixed top-0 left-0 z-50
        shadow-md bg-cover bg-center bg-no-repeat
        px-4 pt-10 pb-4
        min-h-[250px] md:min-h-[400px]
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Botão Carrinho */}
      <button
        onClick={toggleCart}
        className="
          absolute right-4 top-4
          bg-white text-red-600 p-2 rounded-full shadow
          hover:scale-105 transition-transform
        "
        aria-label="Abrir carrinho"
      >
        <i className="fa-solid fa-cart-shopping text-lg"></i>
      </button>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo da Hamburgueria"
        className="w-24 h-24 md:w-32 md:h-32 object-contain mb-3"
      />

      {/* Nome da Hamburgueria */}
      <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow-md">
        Hamburgueria
      </h1>

      {/* Endereço */}
      <div className="mt-2">
        <Endereco />
      </div>

      {/* Horário */}
      <p className="text-sm md:text-base mt-2 drop-shadow-md">
        Seg. à Dom. 18:00 às 22:00
      </p>
    </header>
  );
}
