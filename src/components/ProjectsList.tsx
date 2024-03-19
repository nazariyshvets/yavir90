import SectionTitle from "./SectionTitle";
import Project from "./Project";
import project from "../data";

const ProjectsList = () => (
  <section className="p-4 sm:px-12 xl:px-24">
    <SectionTitle>Проєкти</SectionTitle>
    <Project project={project} />
  </section>
);

export default ProjectsList;
