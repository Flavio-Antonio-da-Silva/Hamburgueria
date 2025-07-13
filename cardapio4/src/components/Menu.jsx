export default function Menu() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-1 my-2">
        <h2 className="font-bold text-3xl text-black">Bebidas</h2>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <Item
          nome="Coca-Cola lata"
          preco="6.00"
          descricao="Coca-Cola 350ml"
          imagem="/src/assets/refri-1.png"
        />
        <Item
          nome="Guaraná lata"
          preco="6.00"
          descricao="Guaraná 350ml"
          imagem="/src/assets/refri-2.png"
        />
      </section>
    </>
  );
}

function Item({ nome, preco, descricao, imagem }) {
  return (
    <div className="flex gap-2 w-full">
      <img
        src={imagem}
        alt={nome}
        className="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
      />
      <div className="w-full">
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
