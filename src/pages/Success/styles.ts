import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-end;
  max-width: 900px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const LeftContent = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  color: #c47f17;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: #333;
  margin-bottom: 20px;
`;
export const InfoBox = styled.div`
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
  border: 2px solid transparent;
  border-radius: 4px 15%; 
  padding: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #444;
`;

export const IconWrapper = styled.div`
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Illustration = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeliveryImage = styled.img`
  margin-right: -30px;
  max-width: 450px;
`;

