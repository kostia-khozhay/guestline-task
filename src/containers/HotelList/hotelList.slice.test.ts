import reducer, {
  setStatus,
  setFilters,
  fetchHotels,
  initialState,
} from 'containers/HotelList/hotelList.slice';
import { HotelListFilter } from 'app/types';
import { HotelResponse } from 'containers/HotelList/hotelList.api';

describe('hotelListSlice', () => {
  test('Should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('Should change the status', () => {
    expect(reducer(undefined, setStatus('loading'))).toEqual({
      ...initialState,
      status: 'loading',
    });
  });

  test('Should change the filters', () => {
    const filters: HotelListFilter = {
      childrenCount: 10,
      minRating: 2,
      adultsCount: 3,
    };
    expect(reducer(undefined, setFilters(filters))).toEqual({
      ...initialState,
      filters,
    });
  });

  describe('fetchHotels async thunk', () => {
    test('Status should be changed when fetchHotels is pending', () => {
      expect(reducer(undefined, { type: fetchHotels.pending })).toEqual({
        ...initialState,
        status: 'loading',
      });
    });

    test('Should set hotels when fetchHotels is fulfilled', () => {
      expect(
        reducer(undefined, {
          type: fetchHotels.fulfilled,
          payload: [
            {
              id: 'ID',
              starRating: '3',
            } as HotelResponse,
          ],
        }),
      ).toEqual({
        ...initialState,
        hotels: [
          {
            id: 'ID',
            starRating: 3,
          },
        ],
      });
    });
  });
});
