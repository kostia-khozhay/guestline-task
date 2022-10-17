import React, { FC } from 'react';
import { HotelRoom as HotelRoomEntity } from 'app/types';
import * as S from './styledComponents';
import { Typography } from '@mui/material';

export interface HotelRoom {
  hotelRoom: HotelRoomEntity;
}

export const HotelRoom: FC<HotelRoom> = ({ hotelRoom }) => {
  const { name, occupancy, longDescription } = hotelRoom;
  const { maxAdults, maxChildren, maxOverall } = occupancy;

  return (
    <S.Container>
      <S.MainInfo>
        <Typography variant='body1'>{name}</Typography>
        <Typography variant='body2'>Adults: {maxAdults}</Typography>
        <Typography variant='body2'>Children: {maxChildren}</Typography>
        {maxOverall && (
          <Typography variant='body2'>Overall: {maxOverall}</Typography>
        )}
      </S.MainInfo>
      <S.Description>
        <Typography variant='body2'>{longDescription}</Typography>
      </S.Description>
    </S.Container>
  );
};
