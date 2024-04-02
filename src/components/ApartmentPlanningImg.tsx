interface ApartmentPlanningImgProps {
  src: string | null;
  onClick?: () => void;
}

const ApartmentPlanningImg = ({ src, onClick }: ApartmentPlanningImgProps) => (
  <img
    src={src || "/noImage.svg"}
    alt="planning"
    className="h-48 w-full cursor-pointer bg-white object-contain xl:h-60"
    onClick={onClick}
  />
);

export default ApartmentPlanningImg;
