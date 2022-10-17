import React, { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { filteredHotelsWithRooms$, hotelList$, loadHotelsWithRooms } from 'containers/HotelList/hotelList.slice';
import { useSelector } from 'react-redux';
import * as S from './styledComponents';
import { CircularProgress, Typography } from '@mui/material';
import { Filter } from 'containers/HotelList/components/Filter/Filter';
import { Hotel } from 'containers/HotelList/components/Hotel/Hotel';

export const HotelList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadHotelsWithRooms());
  }, [dispatch]);

  const { status } = useSelector(hotelList$);
  const hotelsWithRooms = useSelector(filteredHotelsWithRooms$);

  return (
    <S.Root>
      <Filter />
      {status === 'loading' && (
        <S.LoadingContainer>
          <CircularProgress data-testid="loading" />
        </S.LoadingContainer>
      )}
      {status === 'idle' && hotelsWithRooms.length === 0 && (
        <S.NotFound>
          <Typography textAlign='center' variant='body1' component='h3'>
            No hotels found
          </Typography>
        </S.NotFound>
      )}
      {status === 'idle' && hotelsWithRooms.map((hotelWithRooms) => (
        <Hotel key={hotelWithRooms.id} hotel={hotelWithRooms} rooms={hotelWithRooms.rooms} />
      ))}
    </S.Root>
  );
};
