import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 1 0%;
`;

export const Icon = styled.img`
  width: 15.125px;
  height: 19.25px;
`;

export const InputContainer = styled.input<{ width?: string, radio?: boolean }>`
  border: 1px solid rgba(230, 229, 229, 1.00);
  background-color: rgba(237, 237, 237, 1.00);
  display: flex;
  flex-direction: row;
  column-gap: 4px;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  border-radius: 4px;
  width: ${(props) => props.width || "calc(100% - 24px)"};
  font-size: 14px;
  color: #574F4D;
  font-family: "Baloo 2", sans-serif;
  transition: border 0.2s ease-in-out;
`;

export const RadioInput = styled.input<{ checked?: boolean }>`
  display: none;

  &:checked + div {
    background-color: #EBE5F9;
    border: 2px solid #8047F8;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const PaymentLabel = styled.label`
  display: 'flex';
  align-items: 'center';
  column-gap: '8px';
  cursor: pointer;
`;
