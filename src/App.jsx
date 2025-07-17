// Caminho: src/App.jsx
import "./App.css";

// Importação dos componentes reutilizáveis
import Header from "./components/Header";
import Endereco from "./components/Endereco";
import Horario from "./components/Horario";
import Cardapio from "./components/Cardapio";
import Menu from "./components/Menu";
import CartModal from "./components/CartModal";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import Address from "./components/Address";
import AddressWarn from "./components/AddressWarn";
import CloseModalBtn from "./components/CloseModalBtn";
import CheckoutBtn from "./components/CheckoutBtn";
import CartBtn from "./components/CartBtn";
import Root from "./components/Root";

function App() {
  return (
    <>
      {/* Header completo com bg + logo + endereço + horário */}
      <Header />

      <main className="mx-auto max-w-7xl px-2 mt-[300px] mb-16">
        {/* ↑ mt ajusta espaço para não ficar por trás do header fixo. Ajuste conforme visual */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 py-2 mb-6">
          Escolha seu pedido!
        </h2>

        <Cardapio />
        <Menu />
      </main>

      <CartModal>
        <CartItems />
        <CartTotal />
        <Address />
        <AddressWarn />
        <div className="flex items-center justify-between mt-5 w-full">
          <CloseModalBtn />
          <CheckoutBtn />
        </div>
      </CartModal>

      <footer className="w-full h-fit bg-red-500 py-2 fixed bottom-0 z-40 flex items-center justify-center">
        <CartBtn />
      </footer>

      <Root />
    </>
  );
}

export default App;
