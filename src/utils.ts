import type { Apartment } from "./types/Apartment";

const groupApartmentsByRoomsCount = (apartments: Apartment[]) => {
  const groupedApartments: Record<string, Apartment[]> = {};

  apartments.forEach((apartment) => {
    const { roomsCount, isCommercial } = apartment;

    if (!isCommercial) {
      const stringifiedRoomsCount = roomsCount.toString();

      if (!groupedApartments[stringifiedRoomsCount])
        groupedApartments[stringifiedRoomsCount] = [];

      groupedApartments[stringifiedRoomsCount].push(apartment);
    } else {
      if (!groupedApartments["commercial"])
        groupedApartments["commercial"] = [];

      groupedApartments["commercial"].push(apartment);
    }
  });

  return groupedApartments;
};

const findLeastPricePerSquareMeter = (apartments: Apartment[]) => {
  if (apartments.length === 0) return;

  return apartments.reduce(
    (acc, apartment) => Math.min(apartment.pricePerSquareMeter, acc),
    apartments[0].pricePerSquareMeter,
  );
};

export { groupApartmentsByRoomsCount, findLeastPricePerSquareMeter };
