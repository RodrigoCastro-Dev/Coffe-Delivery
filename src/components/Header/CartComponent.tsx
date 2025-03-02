import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext';
import { CartIconOrdersDiv, CartIconOrdersSpan } from './styles'
import CartIcon from '../../assets/cart.svg'

export function CartComponent() {
    const { cart } = useCart();
  
    const [storedState, setStoredState] = useState<string | null>(null);
  
    useEffect(() => {
      const stateJSON = JSON.stringify(cart);
  
      if (stateJSON && JSON.stringify(cart) !== '{}') {
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON);
      }
      const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
  
      setStoredState(storedStateAsJSON);
    }, [cart]);
  
    return (
      <>
        {storedState && (
          <CartIconOrdersDiv>
            <CartIconOrdersSpan>
              {Object.keys(JSON.parse(storedState)).length}
            </CartIconOrdersSpan>
            <img src={CartIcon} alt="Checkout Cart" />
          </CartIconOrdersDiv>
        )}
        {!storedState && <img src={CartIcon} />}
      </>
    );
  }