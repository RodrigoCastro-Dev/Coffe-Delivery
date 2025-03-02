import { HeaderContainer } from './styles'
import Location from '../../assets/location.svg'
import Coffee from '../../assets/coffee.svg'
import { NavLink } from 'react-router-dom'
import { CartComponent } from './CartComponent'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Coffee} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Localização">
          <img src={Location} alt="" />
        </NavLink>
        <NavLink to="/checkout" title="Checkout">
          <CartComponent />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
