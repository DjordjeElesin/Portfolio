//style
import "../style/pages/Projects.scss";
//data
import { projectsData } from "../utils/data/ProjectsData";
//components
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  return (
    <div className="projectsPageContr">
      <div className="projectsHeadingContr">
        <h1 className="fs-h1 fw-bold">Projects Showcasing My Journey</h1>
      </div>
      <div className="projectsListContr">
        {projectsData.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
