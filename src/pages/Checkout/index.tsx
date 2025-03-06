import { HomeContainer, TopTitle, Container, Row, Column, IconContainer, Icon, Title, Subtitle, InputContainer, OptionalLabel, InputDiv, ImageItem, HorizontalRow, ItemBodyButtons, DeleteButton, ConfirmButton, ResponsiveHomeContainer } from "./styles";
import LocateIcon from '../../assets/Icon.svg';
import trash from '../../assets/trash.svg';
import dolarIcon from '../../assets/dolarIcon.svg';
import { PaymentOptions } from "./components/PaymentOptions";
import { Counter } from "../Home/components/CoffeeList/Counter";
import * as React from "react";
import { handleCart } from "../../context/CounterContext";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export function Checkout() {
  const { setCart } = useCart();
  const [cart, setCartState] = useState<any>({});

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
    const parsedCart = storedStateAsJSON ? JSON.parse(storedStateAsJSON) : {};
    setCartState(parsedCart);
  }, []);

  const handleCartUpdate = (item: any, count: number) => {
    handleCart(item, count, (updatedCart) => {
      setCart(updatedCart);
      setCartState(updatedCart);

      if (Object.keys(cart).length == 1) {
        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', '{}');
      }
    });
  };

  const totalPrice = Object.values(cart).reduce((total: any, item: any) => {
    const price = parseFloat(item.price.replace(",", "."));
    return total + price * item.quantity;
  }, 0);

  const handleDelete = (event: React.FormEvent, item: any) => {
    event.preventDefault();

    confirmAlert({
      title: `Excluir ${item.name}`,
      message: 'Tem certeza que deseja remover este item?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            handleCartUpdate(item, 0);
            toast.error(`${item.name} removido do carrinho!`);
          }
        },
        {
          label: 'Não',
        }
      ]
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (Object.values(cart).length === 0) {
      toast.error("Seu carrinho está vazio!");
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      address: {
        cep: formData.get("CEP"),
        street: formData.get("Rua"),
        number: formData.get("Número"),
        complement: formData.get("Complemento"),
        neighborhood: formData.get("Bairro"),
        city: formData.get("Cidade"),
        state: formData.get("UF"),
      },
      cart: cart,
      paymentMethod: formData.get("paymentMethod"),
    };

    if (!data.address.cep || !data.address.street || !data.address.number || !data.address.neighborhood || !data.address.city || !data.address.state || !data.paymentMethod) {
      toast.error("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    localStorage.setItem('@coffee-delivery:address-data-1.0.0', JSON.stringify(data));
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', '{}');
    toast.success("Pedido confirmado!");
    setTimeout(() => {
      window.location.href = "/success";
    }, 2500);
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <HomeContainer style={{ marginRight: '12rem' }}>
          <TopTitle>Complete seu pedido</TopTitle>
          <TopTitle>Café(s) Selecionados</TopTitle>
        </HomeContainer>

        <HomeContainer>
          <Container>
            <Row>
              <IconContainer>
                <Icon src={LocateIcon} />
              </IconContainer>
              <Column>
                <Title>Endereço de Entrega</Title>
                <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
              </Column>
            </Row>
            <Column style={{ rowGap: '16px' }}>
              <InputContainer placeholder="CEP" name="CEP" />
              <InputContainer placeholder="Rua" name="Rua" />
              <Row style={{ columnGap: '12px' }}>
                <InputContainer placeholder="Número" name="Número" />
                <InputDiv>
                  <InputContainer placeholder="Complemento" name="Complemento" />
                  <OptionalLabel>Opcional</OptionalLabel>
                </InputDiv>
              </Row>
              <Row style={{ columnGap: '12px' }}>
                <InputContainer placeholder="Bairro" name="Bairro" />
                <InputContainer placeholder="Cidade" name="Cidade" />
                <InputContainer placeholder="UF" name="UF" />
              </Row>
            </Column>
          </Container>

          <Container>
            {Object.values(cart).length > 0 ? (
              Object.values(cart).map((item: any) => (
                <React.Fragment key={item.id}>
                  <Row>
                    <Column direction="inherit">
                      <ImageItem src={item.image} alt={item.name} />
                      <Title>
                        {item.name}
                        <ItemBodyButtons>
                          <Counter
                            onChange={(event, count) => {
                              event.preventDefault();
                              handleCartUpdate(item, count);
                            }}
                            startingValue={item.quantity}
                          />
                          <DeleteButton onClick={(event) => handleDelete(event, item)}>
                            <img src={trash} alt="" /> Remover
                          </DeleteButton>
                        </ItemBodyButtons>
                      </Title>
                      <Title style={{ textAlign: 'right', fontWeight: 'bold' }}>R${(parseFloat(item.price.replace(',', '.')) * item.quantity)}</Title>
                    </Column>
                  </Row>
                  <HorizontalRow />
                </React.Fragment>
              ))
            ) : (
              <Row>
                <Column>
                  <Title>Seu carrinho está vazio</Title>
                </Column>
              </Row>
            )}
            {Object.values(cart).length > 0 && (
              <>
                <Row>
                  <Column direction="inherit">
                    <Title>Total de itens</Title>
                    <Title style={{ textAlign: 'right' }}>R$ {totalPrice.toFixed(2)}</Title>
                  </Column>
                </Row>
                <Row>
                  <Column direction="inherit">
                    <Title>Entrega</Title>
                    <Title style={{ textAlign: 'right' }}>R$ 5</Title>
                  </Column>
                </Row>
                <Row>
                  <Column direction="inherit">
                    <Title style={{ fontWeight: 'bold', fontSize: '20px' }}>Total</Title>
                    <Title style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '20px' }}>R$ {(totalPrice + 5).toFixed(2)}</Title>
                  </Column>
                </Row>
                <Row>
                  <Column direction="inherit">
                    <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
                  </Column>
                </Row>
              </>
            )}
          </Container>
        </HomeContainer>

        <ResponsiveHomeContainer height={Object.keys(cart).length || 1}>
          <Container>
            <Row>
              <IconContainer>
                <Icon src={dolarIcon} />
              </IconContainer>
              <Column>
                <Title>Pagamento</Title>
                <Subtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar.</Subtitle>
                <PaymentOptions />
              </Column>
            </Row>
          </Container>
          <Container style={{ backgroundColor: 'transparent' }} />
        </ResponsiveHomeContainer>
      </form>
    </div>
  );
}