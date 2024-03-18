import SectionTitle from "./SectionTitle.tsx";
import Project from "./Project.tsx";
import project from "../data.ts";

const ProjectsList = () => (
  <section>
    <SectionTitle>Проєкти</SectionTitle>
    <Project project={project} />
  </section>
);

export default ProjectsList;
