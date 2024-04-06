import { ReactElement } from "react";

import {
  BiStar,
  BiCubeAlt,
  BiBuilding,
  BiArch,
  BiGrid,
  BiDockTop,
  BiSolidFlame,
  BiMoveVertical,
  BiBuildingHouse,
  BiPaintRoll,
  BiSolidTrafficBarrier,
  BiSolidCarGarage,
} from "react-icons/bi";

import type { ProjectCharacterization } from "../types/Project";

interface ProjectDetailProps {
  type: keyof ProjectCharacterization;
  value: string | number;
}

const iconStyles: string = "h-5 w-5 fill-primary sm:h-6 sm:w-6 xl:h-7 xl:w-7";

const typeDetailsMap: Record<
  keyof ProjectCharacterization,
  { icon: ReactElement; displayType: string }
> = {
  class: {
    icon: <BiStar className={iconStyles} />,
    displayType: "клас",
  },
  sectionCount: {
    icon: <BiCubeAlt className={iconStyles} />,
    displayType: "секцій",
  },
  floorCount: {
    icon: <BiBuilding className={iconStyles} />,
    displayType: "поверховість",
  },
  buildingTechnology: {
    icon: <BiArch className={iconStyles} />,
    displayType: "технологія будівництва",
  },
  walls: {
    icon: <BiGrid className={iconStyles} />,
    displayType: "стіни",
  },
  insulation: {
    icon: <BiDockTop className={iconStyles} />,
    displayType: "утеплення",
  },
  heating: {
    icon: <BiSolidFlame className={iconStyles} />,
    displayType: "опалення",
  },
  ceilHeight: {
    icon: <BiMoveVertical className={iconStyles} />,
    displayType: "висота стелі",
  },
  apartmentCount: {
    icon: <BiBuildingHouse className={iconStyles} />,
    displayType: "кількість квартир",
  },
  apartmentState: {
    icon: <BiPaintRoll className={iconStyles} />,
    displayType: "стан квартири",
  },
  territory: {
    icon: <BiSolidTrafficBarrier className={iconStyles} />,
    displayType: "територія",
  },
  parking: {
    icon: <BiSolidCarGarage className={iconStyles} />,
    displayType: "паркінг",
  },
};

const ProjectDetail = ({ type, value }: ProjectDetailProps) => {
  const detail = typeDetailsMap[type];

  return (
    <div className="flex items-center gap-2">
      <span className={iconStyles}>{detail.icon}</span>

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium sm:text-base xl:text-lg">{value}</h3>
        <span className="text-xs text-steel-gray sm:text-sm xl:text-base">
          {detail.displayType}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetail;
