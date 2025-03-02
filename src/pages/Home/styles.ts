import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
`;

export const HomeTitle = styled.h1`
  font-size: 48px;
  text-align: left;
  font-family: "Baloo 2", sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  margin-top: 0.5rem;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const CoffeeImage = styled.img`
  width: 400px;
  height: auto;
  margin-left: 10rem;
  object-fit: contain;
`;
