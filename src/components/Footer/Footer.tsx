import React from 'react';
import * as S from './styledComponents';

export const Footer = () => {
  return (
    <S.Footer>
      Footer &copy; {new Date().getFullYear()}
    </S.Footer>
  );
}
