import Apartment from "./Apartment";
import ApartmentPlanning from "./ApartmentPlanning";

interface Project {
  photoUrls: string[];
  name: string;
  address: string;
  startPricePerSquareMeter: number;
  apartments: Apartment[];
  videoUrl: string | null;
  apartmentPlannings: ApartmentPlanning[];
}

export default Project;
