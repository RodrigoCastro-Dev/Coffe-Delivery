import { Row, Icon, InputContainer, PaymentLabel, RadioInput } from "./styles";
import creditCard from '../../../../assets/creditCard.svg'
import debitCard from '../../../../assets/debitCard.svg'
import money from '../../../../assets/money.svg'
import { useState } from "react";

export const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <Row style={{ columnGap: "12px", marginTop: "1.5rem" }}>
      <PaymentLabel>
        <RadioInput
          type="radio"
          name="payment"
          id="credit"
          value="credit"
          checked={selectedPayment === "credit"}
          onChange={handlePaymentChange}
        />
        <InputContainer as="div">
          <Icon src={creditCard} />
          Cartão de Crédito
        </InputContainer>
      </PaymentLabel>
      <PaymentLabel>
        <RadioInput
          type="radio"
          name="payment"
          id="debit"
          value="debit"
          checked={selectedPayment === "debit"}
          onChange={handlePaymentChange}
        />
        <InputContainer as="div">
          <Icon src={debitCard} />
          Cartão de Débito
        </InputContainer>
      </PaymentLabel>
      <PaymentLabel>
        <RadioInput
          type="radio"
          name="payment"
          id="money"
          value="money"
          checked={selectedPayment === "money"}
          onChange={handlePaymentChange}
        />
        <InputContainer as="div">
          <Icon src={money} />
          Dinheiro
        </InputContainer>
      </PaymentLabel>
    </Row>
  );
};