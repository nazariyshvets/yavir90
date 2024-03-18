import Carousel from "antd/lib/carousel";

import groupApartmentsByRoomsCount from "../utils.ts";
import ProjectType from "../types/Project.ts";

interface ProjectProps {
  project: ProjectType;
}

const Project = ({ project }: ProjectProps) => {
  const groupedApartments = groupApartmentsByRoomsCount(project.apartments);

  const apartmentsView = Object.keys(groupedApartments).map((key) => (
    <div key={key}>
      <h2>{key}-кімнатні квартири</h2>

      <Carousel dotPosition="top">
        {groupedApartments[key].map((apartment, i) => (
          <div key={i} className="rounded">
            <div className="h-40 bg-primary"></div>
            <div>
              <h2>
                {apartment.pricePerSquareMeter} $ за м<sup>2</sup>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-primary"></div>
                  {apartment.roomsCount}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-primary"></div>
                  {apartment.sectionNumber}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-primary"></div>
                  {apartment.area}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-primary"></div>
                  {apartment.releaseDate}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-primary"></div>
                  {apartment.floors}
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-primary"></div>
                  {apartment.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  ));

  return (
    <>
      <div className="flex flex-col gap-4">
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
              className="flex h-40 w-full items-center justify-center rounded bg-primary text-2xl font-medium text-black"
            >
              {i + 1}
            </div>
          ))}
        </Carousel>
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">{project.name}</span>
          <span className="text-xs text-steel-gray">{project.address}</span>
          <span className="font-medium text-primary">
            від {project.startPricePerSquareMeter} $/м
            <sup className="text-primary">2</sup>
          </span>
        </div>
        <div className="h-40 w-full rounded bg-primary"></div>
      </div>

      <div>
        <h1 className="text-xl font-medium">Планування</h1>

        <div>{apartmentsView}</div>
      </div>
    </>
  );
};

export default Project;
