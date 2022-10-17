import React from 'react';
import '@testing-library/jest-dom';
import { HotelList } from './HotelList';
import { renderWithProviders } from 'utils/testUtils';
import * as slice from 'containers/HotelList/hotelList.slice';
import { Hotel, HotelDetails } from 'app/types';

describe('HotelList', () => {
  jest.spyOn(React, 'useEffect').mockImplementation();

  test('Should display loader', () => {
    const { getByTestId } = renderWithProviders(<HotelList />, {
      preloadedState: {
        hotelList: { ...slice.initialState, status: 'loading' },
      },
    });

    expect(getByTestId('loading')).not.toBeNull();
  });

  test('Should render hotel component', () => {
    const { getByTestId } = renderWithProviders(<HotelList />, {
      preloadedState: {
        hotelList: {
          ...slice.initialState,
          hotels: [
            {
              id: 'OBMNG1',
              starRating: 4,
              images: [
                {
                  url: 'https://rl-uk2.azureedge.net/picturemanager/images/OBMNG1/Hotel1.JPG',
                },
              ],
            } as Hotel,
          ],
          hotelsDetails: {
            OBMNG1: {
              rooms: [
                {
                  id: 'DTFF',
                  name: 'Deluxe Twin',
                  shortDescription: 'shortDescription',
                  longDescription: 'longDescription',
                  occupancy: {
                    maxAdults: 2,
                    maxChildren: 0,
                    maxOverall: 2,
                  },
                },
              ],
            } as HotelDetails,
          },
        },
      },
    });

    expect(getByTestId('hotel')).not.toBeNull();
  });
});
