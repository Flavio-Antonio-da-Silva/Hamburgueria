// Caminho: src/components/Cardapio.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cardapio() {
  const { addToCart } = useContext(CartContext);

  const produtos = [
    {
      name: 'Hamburguer Smash',
      desc: 'Um Smash Burger é um tipo de  achatado, com bordas.',
      price: 18.90,
      img: '/src/assets/hamb-1.png',
    },
    {
      name: 'Hamburguer Duplo',
      desc: 'Hambúrguer duplo com queijo e bacon crocante.',
      price: 32.90,
      img: '/src/assets/hamb-2.png',
    },
    {
      name: 'Hamburguer Salad',
      desc: 'Smash com alface, tomate e molho especial.',
      price: 35.90,
      img: '/src/assets/hamb-3.png',
    },
    {
      name: 'Hamburguer da Casa',
      desc: 'Blend especial com molho da casa.',
      price: 30.00,
      img: '/src/assets/hamb-4.png',
    },
    {
      name: 'Hamburguer Tripo',
      desc: 'Blend especial com molho da casa.',
      price: 38.40,
      img: '/src/assets/hamb-5.png',
    },
    {
      name: 'Hamburguer da Casa',
      desc: 'Blend especial com molho da casa.',
      price: 44.90,
      img: '/src/assets/hamb-5.png',
    },
    {
      name: 'Hamburguer de Costela',
      desc: 'Blend especial com molho da casa.',
      price: 55.90,
      img: '/src/assets/hamb-6.png',
    },
    {
      name: 'Hamburguer Supreme',
      desc: 'Blend especial com molho da casa.',
      price: 48.90,
      img: '/src/assets/hamb-7.png',
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {produtos.map((item) => (
        <div key={item.name} className="flex gap-2">
          <img
            src={item.img}
            alt={item.name}
            className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
          />
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-bold text-gray-900">{item.name}</p>
              <p className="text-gray-900">{item.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="font-bold text-black">R${item.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(item)}
                className="flex items-center justify-center text-white bg-gray-900 px-4 py-1 rounded hover:bg-black"
              >
                <i className="fa fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
