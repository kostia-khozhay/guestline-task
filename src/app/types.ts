// @TODO: Check all types with backend
export interface Hotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  images: HotelImage[];
  starRating: number;
  telephone: string;
  email: string;
}

export type HotelWithRooms = Hotel & {
  rooms: HotelRoom[]
}

export interface HotelImage {
  url: string;
}

export interface HotelListFilter {
  minRating: number;
  adultsCount: number;
  childrenCount: number;
}

export interface HotelDetails {
  rooms: HotelRoom[];
  ratePlans: []; // @TODO: Describe type
}

export interface HotelRoom {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall?: number;
  };
  images: HotelRoomImage[];
}

export interface HotelRoomImage {
  url: string;
  alt: string;
}
