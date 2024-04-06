import { Apartment, ApartmentPlanning } from "./Apartment";

export interface Project {
  photoUrls: string[];
  name: string;
  address: string;
  apartments: Apartment[];
  videoUrl: string | null;
  apartmentPlannings: ApartmentPlanning[];
  characterization: ProjectCharacterization;
}

export interface ProjectCharacterization {
  class: string;
  sectionCount: number;
  floorCount: number;
  buildingTechnology: string;
  walls: string;
  insulation: string;
  heating: string;
  ceilHeight: string;
  apartmentCount: number;
  apartmentState: string;
  territory: string;
  parking: string;
}
