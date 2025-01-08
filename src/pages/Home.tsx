//hooks
import { useMemo } from "react";
//style
import "../style/pages/Home.scss";
//components
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import StackCard from "../components/ui/StackCard";
//data
import { stackData } from "../utils/data/StackData";
//types
import { ProjectType, StackType } from "../utils/types/Types";
//icons
import { Fingerprint } from "@phosphor-icons/react";
import { projectsData } from "../utils/data/ProjectsData";
import ProjectCard from "../components/ui/ProjectCard";

export default function Home() {
  const shuffledCards: StackType[] = useMemo(
    () => [...stackData].sort(() => 0.5 - Math.random()),
    []
  );

  const selectedCards = shuffledCards.slice(0, 4);

  const renderHeader = () => {
    return (
      <div className="heading">
        <h1 className="fs-h1 fw-bold lh-large">
          Hey there! <br /> I'm Đorđe...
        </h1>
        <p className="text-dark-200">
          I'm a passionate frontend developer focused on building visually
          appealing and highly functional websites.
        </p>
        <Link to="/about">
          <Button variant="outline" size="small">
            More about Me
          </Button>
        </Link>
      </div>
    );
  };

  const renderDifferenceSection = () => {
    return (
      <div className="differenceContr">
        <div>
          <h2 className="fs-h2 fw-bold">
            What makes me <em>different</em>?
          </h2>
          <div className="">
            <Fingerprint size={60} />
          </div>
        </div>
        <p className="text-dark-300">
          What sets me apart in frontend development is my ability to learn and
          adapt quickly. In just a few months, I have acquired a solid skill set
          that is presented bellow. My dedication to mastering these
          technologies enables me to tackle challenges efficiently and deliver
          high-quality solutions.
        </p>
      </div>
    );
  };

  return (
    <div className="homeContr">
      {renderHeader()}
      {renderDifferenceSection()}
      <div className="sectionContr">
        <h1 className="fs-h2 fw-bold">Recent Projects</h1>
        <div className="sectionContentContr project">
          {projectsData.slice(0,3).map((project: ProjectType) => (
            <ProjectCard key={project.name} project={project}/>
          ))}
        </div>
        <Link to="/projects">
          <Button variant="outline" size="small">
            All Projects
          </Button>
        </Link>
      </div>
      <div className="sectionContr">
        <h1 className="fs-h2 fw-bold">Stack</h1>
        <div className="sectionContentContr">
          {selectedCards.map((stack: StackType, idx: number) => (
            <StackCard
              key={idx}
              isExpanded={false}
              imageSrc={stack.imageSrc}
              title={stack.title}
              subtitle={stack.subtitle}
              text={stack.text}
            />
          ))}
        </div>
        <Link to="/stack">
          <Button variant="outline" size="small">
            All Stack
          </Button>
        </Link>
      </div>
    </div>
  );
}
