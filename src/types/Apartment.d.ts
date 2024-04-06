export interface Apartment {
  pricePerSquareMeter: number;
  roomsCount: number;
  sectionNumber: number;
  area: number;
  releaseDate: string;
  floors: string;
  status: string;
  imgUrl: string | null;
}

export type ApartmentDetailType =
  | "rooms"
  | "section"
  | "area"
  | "release"
  | "floors"
  | "status";

export interface ApartmentPlanning {
  imgUrl: string;
  roomsCount: number;
  section: number;
}
