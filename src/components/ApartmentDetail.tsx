import { PropsWithChildren, ReactElement } from "react";

import {
  BiBed,
  BiCubeAlt,
  BiFullscreen,
  BiCalendarCheck,
  BiBuilding,
  BiHardHat,
} from "react-icons/bi";

import type { ApartmentDetailType } from "../types/Apartment";

interface ApartmentDetailProps {
  type: ApartmentDetailType;
}

const iconStyles = "h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 fill-primary";

const typeIconMap: Record<ApartmentDetailType, ReactElement> = {
  rooms: <BiBed className={iconStyles} />,
  section: <BiCubeAlt className={iconStyles} />,
  area: <BiFullscreen className={iconStyles} />,
  release: <BiCalendarCheck className={iconStyles} />,
  floors: <BiBuilding className={iconStyles} />,
  status: <BiHardHat className={iconStyles} />,
};

const ApartmentDetail = ({
  type,
  children,
}: PropsWithChildren<ApartmentDetailProps>) => (
  <div className="flex items-center gap-2">
    <span className={iconStyles}>{typeIconMap[type]}</span>
    <div>{children}</div>
  </div>
);

export default ApartmentDetail;
