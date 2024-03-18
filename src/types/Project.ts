import Apartment from "./Apartment.ts";

interface Project {
  photoUrls: string[];
  name: string;
  address: string;
  startPricePerSquareMeter: number;
  apartments: Apartment[];
}

export default Project;
