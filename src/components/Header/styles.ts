import styled from 'styled-components'

export const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  ${({ primary }) => primary ? "background-color: #3b82f6; color: white;" : "background-color: #e5e7eb; color: black;"}
`;

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow */
  z-index: 15;
  div {
    display: flex;
    gap: 15px; 

    a {
      max-height: 35px;
      
      color: ${(props) => props.theme['gray-100']};

      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      &.active {
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
export const DivHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;

export const CartIconOrdersDiv = styled.div`
  position: relative;
  display: inline-block;
  max-idth: 38px;
`;

export const CartIconOrdersSpan = styled.span`
  position: absolute;
  top: -10px;
  left: 25px;
  background-color: #DBAC2C;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const CounterValueCount = styled.p`
  margin-top: 3px;
`;