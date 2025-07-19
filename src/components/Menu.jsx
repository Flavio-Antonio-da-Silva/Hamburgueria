// Caminho: src/components/Menu.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import coca from '../assets/refri-1.png';
import guarana from '../assets/refri-2.png';
import agua from '../assets/agua-com-g-t.png';
import cerveja from '../assets/heyneke-t.png';
import coca2l from '../assets/coca-2l-t.png';

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
      name: 'Guaraná Antarctica',
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
      name: 'Heyneken long neck',
      desc: '330ml',
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

      <section className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
      <div className="w-full flex flex-col justify-between">
        <div>
          <p className="font-bold text-gray-900">{produto.name}</p>
          <p className="text-gray-900">{produto.desc}</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-black">
            {produto.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <button
            onClick={aoAdicionar}
            className="flex items-center justify-center text-white bg-gray-900 px-4 py-1 rounded hover:bg-black h-9 w-9"
          >
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
