import React, { memo } from 'react';
import * as S from './styledComponents';
import { Rating } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { filters$, setFilters } from 'containers/HotelList/hotelList.slice';
import { useSelector } from 'react-redux';
import { Counter } from 'components/Counter/Counter';

export const Filter = memo(() => {
  const dispatch = useAppDispatch();
  const filters = useSelector(filters$);
  const { minRating, adultsCount, childrenCount } = filters;

  return (
    <S.Root variant='outlined'>
      <Rating
        value={minRating}
        onChange={(event, newValue) => {
          if (newValue) {
            dispatch(setFilters({ ...filters, minRating: newValue }));
          }
        }}
      />
      <Counter
        label='Adults'
        minVal={1}
        value={adultsCount}
        onChange={(newValue) => dispatch(setFilters({ ...filters, adultsCount: newValue }))}
      />
      <Counter
        label='Children'
        value={childrenCount}
        onChange={(newValue) => dispatch(setFilters({ ...filters, childrenCount: newValue }))}
      />
    </S.Root>
  );
});

Filter.displayName = 'Filter';
