import axios from 'axios';
import { Hotel, HotelDetails } from 'app/types';

export type HotelResponse = Hotel & {
  starRating: string;
};

export type HotelRoomsResponse = HotelDetails;

export async function fetchHotelDetailsByIdRequest(id: Hotel['id']) {
  const { data } = await axios.get<HotelRoomsResponse>(
    `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  return data;
}

export async function fetchHotelsRequest() {
  const { data } = await axios.get<HotelResponse[]>(
    'https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG',
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

  return data;
}
