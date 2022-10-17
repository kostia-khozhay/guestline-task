import styled from 'styled-components';
import SlickSlider from 'react-slick';

export const Image = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 5px;
  object-fit: cover;
`;

export const Slider = styled(SlickSlider)`
  .slick-next {
    right: 3px;
  }

  .slick-prev {
    left: 3px;
    z-index: 5;
  }
`;
