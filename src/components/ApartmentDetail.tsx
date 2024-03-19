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

const typeIconMap = {
  rooms: <BiBed className="h-5 w-5 fill-primary" />,
  section: <BiCubeAlt className="h-5 w-5 fill-primary" />,
  area: <BiFullscreen className="h-5 w-5 fill-primary" />,
  release: <BiCalendarCheck className="h-5 w-5 fill-primary" />,
  floors: <BiBuilding className="h-5 w-5 fill-primary" />,
  status: <BiHardHat className="h-5 w-5 fill-primary" />,
};

const ApartmentDetail = ({
  type,
  children,
}: PropsWithChildren<ApartmentDetailProps>) => (
  <div className="flex items-center gap-2">
    {typeIconMap[type]}
    {children}
  </div>
);

export default ApartmentDetail;
