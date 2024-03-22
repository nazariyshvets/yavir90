import Section from "./Section";
import Project from "./Project";
import project from "../data";

const ProjectsList = () => (
  <Section id="projects" title="Проєкти">
    <Project project={project} />
  </Section>
);

export default ProjectsList;
