import { Container, LeftContent, Title, Subtitle, InfoBox, InfoItem, IconWrapper, Illustration, DeliveryImage } from './styles'
import DeliveryGuy from '../../assets/Illustration.png'
import Time from '../../assets/icons/icon2.svg'
import Location from '../../assets/locationRound.svg'
import Money from '../../assets/moneyRound.svg'

export function Success() {
  const storedStateAsJSON = localStorage.getItem('@coffee-delivery:address-data-1.0.0');
  const parsedCart = storedStateAsJSON ? JSON.parse(storedStateAsJSON) : {};
 
  const paymentMethodTranslations:any = {
    credit: "Cartão de Crédito",
    money: "Dinheiro",
    debit: "Cartão de Débito",
  };
  
  return (
    <>
      <Container>
        <LeftContent>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>

          <InfoBox>
            <InfoItem>
              <IconWrapper>
                <img src={Location} alt="" />
              </IconWrapper>
              <div>
                <strong>Entrega em {parsedCart.address.street}, {parsedCart.address.number}</strong>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <img src={Time} alt="" />
              </IconWrapper>
              <div>
                <strong>Previsão de entrega</strong>
                <p>20 min - 30 min</p>
              </div>
            </InfoItem>

            <InfoItem>
              <IconWrapper>
                <img src={Money} alt="" />
              </IconWrapper>
              <div>
                <strong>Pagamento na entrega</strong>
                <p>{paymentMethodTranslations[parsedCart.paymentMethod]}</p>
              </div>
            </InfoItem>
          </InfoBox>
        </LeftContent>

        <Illustration>
          <DeliveryImage src={DeliveryGuy} alt="Delivery Guy" />
        </Illustration>
      </Container>
    </>
  );
}
