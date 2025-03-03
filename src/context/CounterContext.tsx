export interface coffeeProps {
  id: string;
  name: string;
  description: string;
  tags: string[];
  price: string;
  image: string;
}

export function handleCart(coffee: coffeeProps, count: number, setCart: (cart: any) => void) {

  const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
  const parsedCart = storedStateAsJSON ? JSON.parse(storedStateAsJSON) : {};

  let updatedCart;
  if (count == 0) {
    const { [coffee.id]: _, ...rest } = parsedCart;
    updatedCart = rest;
  } else {
    updatedCart = { ...parsedCart, [coffee.id]: { ...coffee, quantity: count } };
}
  setCart(updatedCart);
}