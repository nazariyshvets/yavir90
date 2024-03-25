import Apartment from "./types/Apartment";

const groupApartmentsByRoomsCount = (apartments: Apartment[]) => {
  const groupedApartments: Record<string, Apartment[]> = {};

  apartments.forEach((apartment) => {
    const { roomsCount } = apartment;
    const roomsCountStringified = roomsCount.toString();

    if (!groupedApartments[roomsCountStringified]) {
      groupedApartments[roomsCountStringified] = [];
    }
    groupedApartments[roomsCountStringified].push(apartment);
  });

  return groupedApartments;
};

export default groupApartmentsByRoomsCount;
