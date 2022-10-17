import { createAsyncThunk, createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { fetchHotelDetailsByIdRequest, fetchHotelsRequest } from 'containers/HotelList/hotelList.api';
import { Hotel, HotelListFilter, HotelDetails, HotelWithRooms } from 'app/types';
import { toast } from 'react-toastify';
import { AppThunk, RootState } from 'app/store';

export interface HotelListState {
  status: 'idle' | 'loading';
  hotels: Hotel[];
  hotelsDetails: Record<Hotel['id'], HotelDetails>;
  filters: HotelListFilter;
}

export const initialState: HotelListState = {
  status: 'idle',
  hotels: [],
  hotelsDetails: {},
  filters: {
    minRating: 3,
    adultsCount: 2,
    childrenCount: 0,
  },
};

export const fetchHotels = createAsyncThunk('hotelList/fetchHotels', async () => {
  try {
    return fetchHotelsRequest();
  } catch (e) {
    toast.error('Fail to load hotel list');
    throw e;
  }
});

export const fetchHotelDetailsById = createAsyncThunk(
  'hotelList/fetchHotelDetailsById',
  async (hotelId: Hotel['id']) => {
    const roomDetails = await fetchHotelDetailsByIdRequest(hotelId);

    return { hotelId, roomDetails };
  },
);

export const hotelListSlice = createSlice({
  name: 'hotelList',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<HotelListFilter>) => {
      state.filters = action.payload;
    },
    setStatus: (state, action: PayloadAction<HotelListState['status']>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.hotels = action.payload.map((hotel) => ({
          ...hotel,
          starRating: Number.parseInt(hotel.starRating),
        }));
      })
      .addCase(fetchHotelDetailsById.fulfilled, (state, action) => {
        state.hotelsDetails[action.payload.hotelId] = action.payload.roomDetails;
      });
  },
});

export const { setFilters, setStatus } = hotelListSlice.actions;

export const loadHotelsWithRooms = (): AppThunk => async (dispatch, getState) => {
  await dispatch(fetchHotels());

  const hotels = hotels$(getState());
  const hotelsDetailsPromises = hotels.map((hotel) =>
    dispatch(fetchHotelDetailsById(hotel.id))
      .unwrap()
      .catch(() => {
        throw new Error(`Failed load hotel rooms for the hotel ${hotel.name}`);
      }),
  );

  try {
    await Promise.all(hotelsDetailsPromises);
  } catch (e) {
    toast.error((e as Error).message);
  }

  dispatch(setStatus('idle'));
};

export const hotelList$ = (state: RootState) => state.hotelList;
export const hotels$ = (state: RootState) => state.hotelList.hotels;
export const hotelsDetails$ = (state: RootState) => state.hotelList.hotelsDetails;
export const filters$ = (state: RootState) => state.hotelList.filters;

export const filteredHotelsWithRooms$ = createSelector(
  [hotels$, hotelsDetails$, filters$],
  (hotels, hotelsDetails, filters) => {
    let filteredHotels = hotels;
    if (filters.minRating) {
      filteredHotels = filteredHotels.filter((hotel) => hotel.starRating >= filters.minRating);
    }

    const hotelsWithRooms = filteredHotels.map<HotelWithRooms>((hotel) => {
      const rooms = (hotelsDetails[hotel.id]?.rooms ?? []).filter((room) => {
        const adultsPassed = filters.adultsCount
          ? room.occupancy.maxAdults >= filters.adultsCount
          : true;

        const childrenPassed = filters.childrenCount
          ? room.occupancy.maxChildren >= filters.childrenCount
          : true;

        const overallPassed = room.occupancy.maxOverall
          ? room.occupancy.maxOverall >= filters.childrenCount + filters.adultsCount
          : true;

        return adultsPassed && childrenPassed && overallPassed;
      });

      return { ...hotel, rooms };
    });

    return hotelsWithRooms.filter((hotelWithRooms) => hotelWithRooms.rooms.length);
  },
);

export default hotelListSlice.reducer;
