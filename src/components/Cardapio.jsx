// Caminho: src/components/Cardapio.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import hamb1 from '../assets/hamb-1.png';
import hamb2 from '../assets/hamb-2.png';
import hamb3 from '../assets/hamb-3.png';
import hamb4 from '../assets/hamb-4.png';
import hamb5 from '../assets/hamb-5.png';
import hamb6 from '../assets/hamb-6.png';
import hamb7 from '../assets/hamb-7.png';
import hamb8 from '../assets/hamb-8.png';

export default function Cardapio() {
  const { addToCart, getTotal } = useContext(CartContext);

  const produtos = [
    {
      name: 'Hamburguer Smash',
      desc: 'Um Smash Burger é um tipo de  achatado, com bordas.',
      price: 18.90,
      img: hamb1,
    },
    {
      name: 'Hamburguer Duplo',
      desc: 'Hambúrguer duplo com queijo e bacon crocante.',
      price: 32.90,
      img: hamb2,
    },
    {
      name: 'Hamburguer Salad',
      desc: 'Smash com alface, tomate e molho especial.',
      price: 35.90,
      img: hamb3,
    },
    {
      name: 'Hamburguer da Casa',
      desc: 'Blend especial com molho da casa.',
      price: 30.00,
      img: hamb4,
    },
    {
      name: 'Hamburguer Triplo',
      desc: 'Blend especial com molho da casa.',
      price: 38.40,
      img: hamb5,
    },
    {
      name: 'Hamburguer Supremo',
      desc: 'Blend especial com molho da casa.',
      price: 44.90,
      img: hamb5,
    },
    {
      name: 'Hamburguer de Costela',
      desc: 'Blend especial com molho da casa.',
      price: 55.90,
      img: hamb6,
    },
    {
      name: 'Hamburguer Supreme',
      desc: 'Blend especial com molho da casa.',
      price: 48.90,
      img: hamb7,
    },
    {
      name: 'Hamburguer Artesanal',
      desc: 'Pão australiano, cheddar e cebola caramelizada.',
      price: 52.90,
      img: hamb8,
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-1 my-2">
        <h2 className="font-bold text-3xl text-black">Cardápio</h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {produtos.map((item, index) => (
          <Item
            key={index}
            produto={item}
            aoAdicionar={() => addToCart(item)}
          />
        ))}
      </section>

      {/* Total dos itens selecionados */}
      <div className="mt-6 text-right pr-2">
        <p className="text-lg font-bold text-black">
          Total do carrinho:{' '}
          <span className="text-green-600">
            {getTotal().toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </p>
      </div>
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
