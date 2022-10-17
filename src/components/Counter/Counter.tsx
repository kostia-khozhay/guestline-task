import React, { FC } from 'react';
import * as S from './styledComponents';
import { ButtonGroup, Button } from '@mui/material';

export interface CounterProps {
  label: string;
  value: number;
  minVal?: number;
  onChange: (newValue: number) => void;
}

export const MAX_COUNT = 50;

export const Counter: FC<CounterProps> = ({ label, value, minVal = 0, onChange }) => {
  const onMinesClick = () => onChange(value - 1);
  const onPlusClick = () => onChange(value + 1);

  const isMinesDisabled = value <= minVal;
  const isPlusDisabled = value >= MAX_COUNT;

  return (
    <S.Root>
      <S.Label>{label}</S.Label>
      <ButtonGroup size='small' aria-label='small outlined button group'>
        <Button disabled={isMinesDisabled} onClick={() => onMinesClick()}>
          -
        </Button>
        <Button>{value}</Button>
        <Button disabled={isPlusDisabled} onClick={() => onPlusClick()}>
          +
        </Button>
      </ButtonGroup>
    </S.Root>
  );
};
