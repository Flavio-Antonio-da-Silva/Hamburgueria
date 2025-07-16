// src/components/CartModal.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartModal({ children }) {
  const { isCartOpen } = useContext(CartContext);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ y: '30%' }}
          animate={{ y: 0 }}
          exit={{ y: '30%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className="fixed bottom-14 left-0 right-0 z-25 bg-white shadow-2xl rounded-t-2xl p-5"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
