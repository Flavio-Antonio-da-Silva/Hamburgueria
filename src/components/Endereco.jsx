// Caminho: src/components/Endereco.jsx
import React from "react";
import bg from "../assets/bg.png";

export default function Endereco() {
  return (
    <div
      className="w-full bg-cover bg-center rounded-md mt-2 px-4 py-2"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <span className="font-medium text-white text-center block text-base">
        Rua do sucesso n°52, Copacabana - RJ
      </span>
    </div>
  );
}
