import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import coca from '../assets/refri-1.png';
import guarana from '../assets/refri-2.png';
import agua from '../assets/agua-gas.png';
import cerveja from '../assets/cerveja.png';
import coca2l from '../assets/coca-2L.png';

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  const bebidas = [
    {
      name: 'Coca-Cola lata',
      desc: '350ml',
      price: 6.9,
      img: coca,
    },
    {
      name: 'Guaraná lata',
      desc: '350ml',
      price: 6.9,
      img: guarana,
    },
    {
      name: 'Água com gás',
      desc: '500ml',
      price: 4.5,
      img: agua,
    },
    {
      name: 'Cerveja lata',
      desc: '350ml',
      price: 7.5,
      img: cerveja,
    },
    {
      name: 'Coca-Cola 2L',
      desc: 'Pet 2 Litros',
      price: 10.0,
      img: coca2l,
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-1 my-2">
        <h2 className="font-bold text-3xl text-black">Bebidas</h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {bebidas.map((bebida, index) => (
          <Item
            key={index}
            produto={bebida}
            aoAdicionar={() => addToCart(bebida)}
          />
        ))}
      </section>
    </>
  );
}

function Item({ produto, aoAdicionar }) {
  return (
    <div className="flex gap-2 w-full">
      <img
        src={produto.img}
        alt={produto.name}
        className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
      />
      <div className="w-full">
        <p className="font-bold text-gray-900">{produto.name}</p>
        <p className="text-gray-900">{produto.desc}</p>
        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-black">
            R$ {produto.price.toFixed(2)}
          </p>
          <button
            onClick={aoAdicionar}
            className="px-5 add-to-cart-btn"
          >
            <i className="fa fa-cart-plus bg-gray-900 px-4 py-1 rounded text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
