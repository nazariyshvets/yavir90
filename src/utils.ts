import Apartment from "./types/Apartment";
import ApartmentPlanning from "./types/ApartmentPlanning";

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

export { groupApartmentsByRoomsCount, groupApartmentPlanningsBySection };
