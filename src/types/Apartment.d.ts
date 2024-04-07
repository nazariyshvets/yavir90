export interface Apartment {
  pricePerSquareMeter: number;
  roomsCount: number;
  sectionNumber: number;
  area: number;
  releaseDate: string;
  floors: string;
  status: string;
  imgUrl: string | null;
  isCommercial?: boolean;
}

export type ApartmentDetailType =
  | "rooms"
  | "section"
  | "area"
  | "release"
  | "floors"
  | "status";
