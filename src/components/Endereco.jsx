// Caminho: src/components/Endereco.jsx
import React from 'react';
import bg from '../assets/bg.png';

export default function Endereco() {
  return (
    <div
      className="w-full bg-cover bg-center rounded-md mt-5 px-4 py-3"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <span className="font-medium text-white text-lg">
        Rua do sucesso n°54, Copacabana - RJ
      </span>
    </div>
  );
}
