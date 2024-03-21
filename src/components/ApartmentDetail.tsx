import { PropsWithChildren } from "react";
import {
  BiBed,
  BiCubeAlt,
  BiFullscreen,
  BiCalendarCheck,
  BiBuilding,
  BiHardHat,
} from "react-icons/bi";

interface ApartmentDetailProps {
  type: "rooms" | "section" | "area" | "release" | "floors" | "status";
}

const iconStyles = "h-5 w-5 fill-primary";

const typeIconMap = {
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
    {typeIconMap[type]}
    <div>{children}</div>
  </div>
);

export default ApartmentDetail;
