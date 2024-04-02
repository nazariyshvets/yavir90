import { PropsWithChildren } from "react";
import Carousel from "antd/lib/carousel";

interface ProjectCarouselProps {
  title: string;
}

const ProjectCarousel = ({
  title,
  children,
}: PropsWithChildren<ProjectCarouselProps>) => (
  <div className="flex flex-col gap-4 overflow-hidden rounded bg-charcoal shadow-lg shadow-white">
    <h3 className="p-2 text-base font-medium text-primary sm:p-3 sm:text-lg xl:p-4 xl:text-xl">
      {title}
    </h3>

    <Carousel dotPosition="top" className="overflow-hidden rounded pt-6">
      {children}
    </Carousel>
  </div>
);

export default ProjectCarousel;
