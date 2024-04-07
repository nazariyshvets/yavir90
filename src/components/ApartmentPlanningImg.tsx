import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

interface ApartmentPlanningImgProps {
  src: string | null;
  onClick?: () => void;
}

const ApartmentPlanningImg = ({ src, onClick }: ApartmentPlanningImgProps) => (
  <LazyLoadImage
    src={src || "/noImage.svg"}
    alt="planning"
    width="100%"
    effect="blur"
    className="h-48 w-full cursor-pointer bg-white object-contain xl:h-60"
    onClick={onClick}
  />
);

export default ApartmentPlanningImg;
