import { DivHeaderContainer, HeaderContainer } from './styles'
import Location from '../../assets/location.svg'
import Coffee from '../../assets/coffee.svg'
import { NavLink } from 'react-router-dom'
import { CartComponent } from './CartComponent'

export function Header() {
  return (
    <HeaderContainer>
      <DivHeaderContainer>
        <NavLink to="/" title="Home">
          <img src={Coffee} alt="" />
        </NavLink>
        <div>
          <NavLink to="/" title="Localização">
            <img src={Location} alt="" />
          </NavLink>
          <NavLink to="/checkout" title="Checkout">
            <CartComponent />
          </NavLink>
        </div>
      </DivHeaderContainer>
    </HeaderContainer>
  )
}
