import type { Apartment, ApartmentPlanning } from "./types/Apartment";

const groupApartmentsByRoomsCount = (apartments: Apartment[]) => {
  const groupedApartments: Record<string, Apartment[]> = {};

  apartments.forEach((apartment) => {
    const { roomsCount } = apartment;
    const stringifiedRoomsCount = roomsCount.toString();

    if (!groupedApartments[stringifiedRoomsCount]) {
      groupedApartments[stringifiedRoomsCount] = [];
    }

    groupedApartments[stringifiedRoomsCount].push(apartment);
  });

  return groupedApartments;
};

const groupApartmentPlanningsBySection = (
  apartmentPlannings: ApartmentPlanning[],
) => {
  const groupedPlannings: Record<string, ApartmentPlanning[]> = {};

  apartmentPlannings.forEach((planning) => {
    const { section } = planning;
    const stringifiedSection = section.toString();

    if (!groupedPlannings[stringifiedSection]) {
      groupedPlannings[stringifiedSection] = [];
    }

    groupedPlannings[stringifiedSection].push(planning);
  });

  return groupedPlannings;
};

const findLeastPricePerSquareMeter = (apartments: Apartment[]) => {
  if (apartments.length === 0) return;

  return apartments.reduce(
    (acc, apartment) => Math.min(apartment.pricePerSquareMeter, acc),
    apartments[0].pricePerSquareMeter,
  );
};

export {
  groupApartmentsByRoomsCount,
  groupApartmentPlanningsBySection,
  findLeastPricePerSquareMeter,
};
