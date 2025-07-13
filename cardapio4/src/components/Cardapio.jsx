export default function Cardapio() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {/* Item 1 */}
      <Item
        nome="Hamburguer Smash"
        preco="18.90"
        descricao="Um Smash Burger é um tipo de hambúrguer conhecido por ser fino e achatado, com bordas"
        imagem="/src/assets/hamb-1.png"
      />

      {/* Item 2 */}
      <Item
        nome="Hamburguer Duplo"
        preco="32.90"
        descricao="Um Smash Burger é um tipo de hambúrguer conhecido por ser fino e achatado, com bordas"
        imagem="/src/assets/hamb-2.png"
      />

      {/* Item 3 */}
      <Item
        nome="Hamburguer Salad"
        preco="35.90"
        descricao="Um Smash Burger é um tipo de hambúrguer conhecido por ser fino e achatado, com bordas"
        imagem="/src/assets/hamb-3.png"
      />

      {/* Item 4 */}
      <Item
        nome="Hamburguer da Casa"
        preco="30.00"
        descricao="Um Smash Burger é um tipo de hambúrguer conhecido por ser fino e achatado, com bordas"
        imagem="/src/assets/hamb-4.png"
      />
    </section>
  );
}

function Item({ nome, preco, descricao, imagem }) {
  return (
    <div className="flex gap-2">
      <img
        src={imagem}
        alt={nome}
        className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
      />
      <div>
        <p className="font-bold text-gray-900">{nome}</p>
        <p className="text-gray-900">{descricao}</p>
        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="font-bold text-black">R${preco}</p>
          <button
            className="px-5 add-to-cart-btn"
            data-name={nome}
            data-price={preco}
          >
            <i className="fa fa-cart-plus bg-gray-900 px-4 py-1 rounded text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
