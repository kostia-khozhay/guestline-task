import React, { FC, Fragment } from 'react';
import { Hotel as HotelEntity, HotelRoom as HotelRoomEntity } from 'app/types';
import * as S from './styledComponents';
import { Rating, Divider, Chip } from '@mui/material';
import { ImageSlider } from 'containers/HotelList/components/ImageSlider/ImageSlider';
import { HotelRoom } from 'containers/HotelList/components/HotelRoom/HotelRoom';

export interface HotelProps {
  hotel: HotelEntity;
  rooms: HotelRoomEntity[];
}

export const Hotel: FC<HotelProps> = ({ hotel, rooms }) => {
  return (
    <S.HotelCard data-testid="hotel">
      <S.Container>
        <S.Images>
          <ImageSlider images={hotel.images} />
        </S.Images>
        <S.Info>
          <S.TopLine>
            {hotel.name}
            <Rating name='read-only' value={hotel.starRating} readOnly />
          </S.TopLine>
          <address>
            <S.Address>{hotel.address1}</S.Address>
            {hotel.address2 && <S.Address>{hotel.address2}</S.Address>}
          </address>
        </S.Info>
      </S.Container>

      {rooms.map((hotelRoom, index) => (
        <Fragment key={hotelRoom.id}>
          <Divider>{index === 0 && <Chip label='Rooms' />}</Divider>
          <HotelRoom hotelRoom={hotelRoom} />
        </Fragment>
      ))}
    </S.HotelCard>
  );
};
