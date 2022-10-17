import styled from 'styled-components';
import { Card } from '@mui/material';

export const HotelCard = styled(Card)`
  max-width: 700px;
  margin: 15px auto;
  padding: 16px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Images = styled.div`
  width: 200px;
  height: 140px;
`;

export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Address = styled.div`
  font-size: 14px;
  margin-top: 5px;
`;


