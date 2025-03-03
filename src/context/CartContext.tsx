import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextProps {
  cart: { [key: string]: { quantity: number; [key: string]: any } };
  setCart: React.Dispatch<React.SetStateAction<{ [key: string]: { quantity: number; [key: string]: any } }>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<{ [key: string]: { quantity: number; [key: string]: any } }>({});

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};