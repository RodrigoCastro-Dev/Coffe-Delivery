import { HeaderContainer, StyledButton } from './styles'
import Location from '../../assets/location.svg'
import Coffe from '../../assets/coffee.svg'
import Cart from '../../assets/cart.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="Home">
          <img src={Coffe} alt="" />
        </NavLink>
      </span>
      <nav>
        <NavLink to="/" title="Localização">
          <img src={Location} alt="" />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <img src={Cart} alt="" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
