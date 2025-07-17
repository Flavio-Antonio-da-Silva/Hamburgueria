// Caminho: src/components/CartModal.jsx
import React, { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import CartTotal from "./CartTotal";

export default function CartModal() {
  const { isCartOpen, cartItems, toggleCart, checkout } = useContext(CartContext);

  // Função local para formatar valores em BRL
  const formatBRL = (v) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
      Number(v) || 0
    );

  // Total opcional aqui (não exibido diretamente; CartTotal faz isso, mas usamos p/ disabled logic se quiser)
  const cartValue = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto"
        >
          <h2 className="text-xl font-bold mb-4">Seu Carrinho</h2>

          {/* Lista de Itens */}
          <div className="max-h-60 overflow-y-auto mb-4 pr-1">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center mb-3 border-b pb-2"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.quantity}x {formatBRL(item.price)}
                    </p>
                  </div>
                  <p className="font-bold">{formatBRL(item.price * item.quantity)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Seu carrinho está vazio.</p>
            )}
          </div>

          {/* Total do Carrinho */}
          <CartTotal />

          {/* Botões */}
          <div className="flex justify-between mt-4 gap-2">
            <button
              onClick={toggleCart}
              className="w-1/2 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 transition-all"
            >
              Fechar
            </button>
            <button
              onClick={checkout}
              disabled={cartItems.length === 0 || cartValue <= 0}
              className={`w-1/2 text-white font-semibold py-2 px-4 rounded transition-all ${
                cartItems.length === 0 || cartValue <= 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Finalizar Pedido
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
