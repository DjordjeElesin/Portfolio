//style
import { Link } from "react-router-dom";
import "../../style/components/ui/ProjectCard.scss";
//type
import { ProjectType } from "../../utils/types/Types";

type ProjectCardType = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardType) {
  return (
    <div className="projectCardContr">
      <Link to="https://coffee-shop-navy-zeta.vercel.app/" target="_blank">
        <div className="projectCardImageContr">
          <div>
            <img src={project.imageSrc} alt={project.name} />
          </div>
        </div>
      </Link>
      <Link to="https://coffee-shop-navy-zeta.vercel.app/" target="_blank">
        <div className="projectCardContentContr">
          <span>{project.category.toUpperCase()}</span>
          <h2 className="fs-large fw-bold">{project.name}</h2>
        </div>
      </Link>
    </div>
  );
}
