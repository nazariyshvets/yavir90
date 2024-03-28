import Apartment from "./Apartment";

interface Project {
  photoUrls: string[];
  name: string;
  address: string;
  startPricePerSquareMeter: number;
  apartments: Apartment[];
  videoUrl: string | null;
}

export default Project;
