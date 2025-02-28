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

export const ContainerDiv = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${(props) => `${props.gap}rem`};
`

export const FilterDiv = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`
interface FilterButtonProps {
  isActive: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  border: 1px solid ${(props) => (props.isActive ? '#4B2995' : props.theme['yellow-500'])};
  border-radius: 20px;
  padding: 0.4rem;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme['yellow-500']};
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &.active {
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

export const Container = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const TagFilter = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

// export const FilterButton = styled.button`
//   background: "#4a5568";
//   color: white;
//   padding: 8px 12px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background: #6b46c1;
//   }
//   &:active {
//     background: #6b46c1;
//   }
// `;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

export const CoffeeCard = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  max-height: 150px;
`;

export const CardContent = styled.div`
  padding: 16px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 8px;
`;

export const Tag = styled.span`
  font-size: 12px;
  background: #f6ad55;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
`;

export const CoffeeName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #2d3748;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #4a5568;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #1a202c;
`;

export const Button = styled.button`
  background: #6b46c1;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;