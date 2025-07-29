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
        top-0 left-0 z-50
        shadow-md bg-cover bg-center bg-no-repeat
        py-1 pt-1 pb-4
        min-h-[250px] md:min-h-[400px]
        mb-0
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* botão link whatsapp */}
      <a
        href="https://wa.me/5521977496651"
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute right-4 top-4 py-2 
          bg-green-500
          text-white p-3 rounded-full shadow
          hover:scale-105 transition-transform
        "
        aria-label="Whatsapp"
      >
        <i className="fa-brands fa-whatsapp text-lg"></i>
      </a>

      {/* Logo */}
      <img
        src={logo}
        alt="Logo da Hamburgueria"
        className="w-24 h-24 md:w-32 md:h-32 object-contain mb-3 rounded-full"
      />

      {/* Nome da Hamburgueria */}
      <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow-md">
        Hamburgueria
      </h1>

      {/* Endereço */}
      <div className="mt-1 py-0">
        <Endereco />
      </div>

      {/* Horário */}
      <p className="text-sm md:text-base mt-2 drop-shadow-md bg-green-500 rounded-full py-2 my-0 px-2">
  Seg. à Dom. 18:00 às 22:00
</p>

    </header>
  );
}
