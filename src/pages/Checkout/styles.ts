import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 1rem;
  & > div:first-child {
    flex: 0 0 55%;
    max-height: 24rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    & > div:first-child {
      flex: 0 0 100%;
      max-height: none;
    }
  }
`;

export const ResponsiveHomeContainer = styled(HomeContainer)<{ height: number }>`
  margin-top: calc((-6.01rem * ${(props) => props.height}) + 7rem);
  position: relative;
  z-index: 1;
`;



export const TopTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: "Baloo 2", sans-serif;
`;

export const Container = styled.div`
  background-color: rgba(243, 242, 242, 1.00);
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 14px;
  border-radius: 20px;
`;

export const Row = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const IconContainer = styled.div`
  width: 22px;
  height: 22px;
`;

export const Icon = styled.img`
  width: 15.125px;
  height: 19.25px;
`;

export const Column = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  row-gap: 2px;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1 1 0%;
`;

export const Title = styled.div`
  color: rgba(64, 57, 55, 1.00);
  font-family: Roboto;
  font-weight: 400;
  width: 100%;
  text-align: left;
  font-size: 16px;
`;

export const Subtitle = styled.div`
  height: 21px;
  color: rgba(87, 79, 77, 1.00);
  font-family: Roboto;
  font-weight: 400;
  width: 100%;
  text-align: left;
  font-size: 14px;
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

export const OptionalLabel = styled.span`
  transform: translateY(-50%);
  background-color: rgba(237, 237, 237, 1.00);
  color: rgba(141, 134, 134, 1.00);
  font-family: Roboto;
  font-weight: 400;
  font-style: italic;
  padding: 0 4px;
  text-align: left;
  font-size: 12px;
`;

export const InputDiv = styled.div`
  width: 100%
`

export const ImageItem = styled.img`
  width: 65%;
  height: auto;
  object-fit: scale-down;
  display: block;
  max-height: 65px;
`;

export const HorizontalRow = styled.hr`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3)
`;

export const ItemBodyButtons = styled.div`
  width: 50%;
  margin-top: 5px;
  display: flex;
  gap: 0.3rem;
`;

export const DeleteButton = styled.button`
  background: #E6E5E5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 3px 20px;
  font-family: Roboto;
  color: rgba(87, 79, 77, 1.00);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

`;

export const ConfirmButton = styled.button`
  cursor: pointer;
  background: #DBAC2C;
  border: none;
  border-radius: 5px;
  padding: 4px 20px;
  font-family: Roboto;
  color: white;
  width: 100%;
  height: 3rem;
  font-size: 15px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;
