import { useState } from "react";

import Carousel from "antd/lib/carousel";
import { BiPlayCircle } from "react-icons/bi";

import ApartmentDetail from "./ApartmentDetail";
import Modal from "./Modal";
import groupApartmentsByRoomsCount from "../utils";
import ProjectType from "../types/Project";

interface ProjectProps {
  project: ProjectType;
}

interface ModalState {
  isOpened: boolean;
  type: "img" | "video";
  url?: string;
}

const Project = ({ project }: ProjectProps) => {
  const [modalState, setModalState] = useState<ModalState>();

  const handleModalOpen = (type: "img" | "video", url?: string) =>
    setModalState({ isOpened: true, type, url });

  const handleModalClose = () => setModalState(undefined);

  const groupedApartments = groupApartmentsByRoomsCount(project.apartments);

  const apartmentsView = Object.keys(groupedApartments).map((key) => (
    <div
      key={key}
      className="flex flex-col gap-4 overflow-hidden rounded bg-charcoal shadow-lg shadow-white"
    >
      <h3 className="p-2 text-base font-medium text-primary sm:p-3 sm:text-lg xl:p-4 xl:text-xl">
        {key}-кімнатні квартири
      </h3>

      <Carousel dotPosition="top" className="overflow-hidden rounded">
        {groupedApartments[key].map((apartment, i) => (
          <div key={i}>
            <img
              src={apartment.imgUrl}
              alt="planning"
              className="h-48 w-full cursor-pointer object-contain xl:h-60"
              onClick={() => handleModalOpen("img", apartment.imgUrl)}
            />

            <div className="p-2 sm:p-3 xl:p-4">
              <h3 className="text-lg font-medium text-primary sm:text-xl xl:text-2xl">
                {apartment.pricePerSquareMeter} $ за{" "}
                <span className="text-primary">
                  м<sup className="text-primary">2</sup>
                </span>
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm sm:mt-4 sm:text-base xl:mt-6 xl:text-lg">
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
    <div className="flex flex-col gap-12 sm:gap-16 xl:gap-20">
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-1 flex-col overflow-hidden rounded bg-charcoal shadow-lg shadow-white">
          <Carousel autoplay>
            {project.photoUrls.map((url) => (
              <img
                key={url}
                src={url}
                alt="building"
                className="h-48 w-full cursor-pointer object-cover xl:h-60"
                onClick={() => handleModalOpen("img", url)}
              />
            ))}
          </Carousel>

          <div className="flex w-full flex-col justify-center p-2 sm:p-3 xl:p-4">
            <span className="text-xl font-bold sm:text-2xl xl:text-3xl">
              {project.name}
            </span>
            <span className="mt-1 text-xs text-steel-gray sm:text-sm xl:text-base">
              {project.address}
            </span>
            <span className="mt-4 font-medium text-primary sm:mt-6 sm:text-lg xl:mt-8 xl:text-xl">
              від {project.startPricePerSquareMeter} $/м
              <sup className="text-primary">2</sup>
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full px-10 xl:px-20">
            <div
              className="video-wrapper relative flex cursor-pointer items-center justify-center"
              onClick={() => handleModalOpen("video", project.videoUrl)}
            >
              <img
                src="/building.webp"
                alt="video"
                className="h-48 w-full rounded object-cover shadow-lg shadow-white xl:h-60"
              />
              <BiPlayCircle className="play-icon absolute text-4xl transition-colors sm:text-5xl xl:text-6xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold sm:text-2xl xl:text-3xl">
          Планування
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {apartmentsView}
        </div>
      </div>

      {modalState?.isOpened && (
        <Modal
          type={modalState.type}
          url={modalState.url}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default Project;
