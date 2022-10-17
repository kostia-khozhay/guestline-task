import React from 'react';

import { HotelList } from 'containers/HotelList/HotelList';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import * as S from './styledComponents';

export const App = () => {
  return (
    <S.App>
      <Header />
      <main>
        <HotelList />
      </main>
      <Footer />
    </S.App>
  );
}
