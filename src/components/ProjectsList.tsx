import Section from "./Section";
import Project from "./Project";
import { Project as ProjectType } from "../types/Project";

interface ProjectsListProps {
  projects: ProjectType[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => (
  <Section id="projects" title="Проєкти">
    <div className="flex flex-col gap-12">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </div>
  </Section>
);

export default ProjectsList;
