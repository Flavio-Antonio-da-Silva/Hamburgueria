export default function CartBtn() {
  return (
    <button className="flex items-center gap-2 text-yellow-400 font-bold">
      <span id="cart-btn">0</span>
      Veja seu carrinho
      <i className="fa fa-cart-plus text-lg text-white"></i>
    </button>
  );
}
