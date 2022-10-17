import React, { FC } from 'react';
import { HotelImage } from 'app/types';

import * as S from './styledComponents';

export interface HotelProps {
  images: HotelImage[];
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const ImageSlider: FC<HotelProps> = ({ images }) => {
  return (
    <S.Slider {...settings}>
      {images.map((image) => (
        <S.Image key={image.url} src={image.url} alt="" />
      ))}
    </S.Slider>
  );
};
