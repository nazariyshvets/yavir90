import Carousel from "antd/lib/carousel";

import ApartmentDetail from "./ApartmentDetail";
import groupApartmentsByRoomsCount from "../utils";
import ProjectType from "../types/Project";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const groupedApartments = groupApartmentsByRoomsCount(project.apartments);

  const apartmentsView = Object.keys(groupedApartments).map((key) => (
    <div key={key} className="flex flex-col gap-2">
      <h3 className="text-sm font-medium text-steel-gray">
        {key}-кімнатні квартири
      </h3>

      <Carousel
        dotPosition="top"
        className="overflow-hidden rounded bg-charcoal shadow-lg shadow-white"
      >
        {groupedApartments[key].map((apartment, i) => (
          <div key={i}>
            <div className="h-40 bg-primary"></div>
            <div className="p-2">
              <h3 className="text-lg font-medium text-primary">
                {apartment.pricePerSquareMeter} $ за м
                <sup className="text-primary">2</sup>
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <ApartmentDetail type="rooms">
                  {apartment.roomsCount}{" "}
                  {apartment.roomsCount === 1 ? "кімната" : "кімнати"}
                </ApartmentDetail>
                <ApartmentDetail type="section">
                  секція {apartment.sectionNumber}
                </ApartmentDetail>
                <ApartmentDetail type="area">
                  {apartment.area}{" "}
                  <span>
                    м<sup>2</sup>
                  </span>
                </ApartmentDetail>
                <ApartmentDetail type="release">
                  {apartment.releaseDate}
                </ApartmentDetail>
                <ApartmentDetail type="floors">
                  {apartment.floors} поверхи
                </ApartmentDetail>
                <ApartmentDetail type="status">
                  {apartment.status}
                </ApartmentDetail>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  ));

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col overflow-hidden rounded bg-charcoal shadow-lg shadow-white">
        <Carousel autoplay>
          {/*{project.photoUrls.map((url) => (*/}
          {/*  <img*/}
          {/*    key={url}*/}
          {/*    src={url}*/}
          {/*    alt="building"*/}
          {/*    className="h-40 w-full rounded object-cover"*/}
          {/*  />*/}
          {/*))}*/}
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="flex h-40 w-full items-center justify-center bg-primary text-2xl font-medium text-black"
            >
              {i + 1}
            </div>
          ))}
        </Carousel>
        <div className="flex flex-col p-2">
          <span className="text-xl font-bold">{project.name}</span>
          <span className="mt-1 text-xs text-steel-gray">
            {project.address}
          </span>
          <span className="mt-4 font-medium text-primary">
            від {project.startPricePerSquareMeter} $/м
            <sup className="text-primary">2</sup>
          </span>
        </div>
      </div>

      <div className="h-40 w-full rounded bg-primary shadow-lg shadow-white"></div>

      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium">Планування</h2>

        <div className="flex flex-col gap-6">{apartmentsView}</div>
      </div>
    </div>
  );
};

export default Project;
