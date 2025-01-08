import "../style/pages/About.scss";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import ExperienceSection from "../components/layout/ExperienceSection";

export default function About() {
  return (
    <div className="aboutPageContr">
      <div className="aboutHeading">
        <div className="titleContr">
          <h1 className="fs-h1 fw-bold lh-large m">
            About Me: <br />
            Crafting Digital Excellence
          </h1>
          <p className="text-dark-300">
            I'm a passionate frontend developer focused on building visually
            appealing and highly functional websites that deliver exceptional
            user experiences. I discovered a true passion for frontend
            development, where every challenge brings a surge of excitement.
            It's like a dopamine rush when I find a solution to a problem or see
            a project come to life. The process of creating interactive
            experiences fuels my drive to constantly <em>learn and improve</em>.
          </p>
        </div>
        <div className="imgContr">
          <img alt="Djordje Elesin" src="assets/ProfileBW.jpg" />
        </div>
      </div>
      <div className="credentialsContr">
        <div className="flex flex-col gap-2 credential">
          <h2 className="fs-h2 fw-bold">Education</h2>
          <div>
            <h4 className="fs-large fw-semibold">
              Faculty of Economics in Subotica
            </h4>
            <p className="text-dark-300">
              Undergraduate studies in Business Informatics (2021–present)
            </p>
          </div>
          <div>
            <h4 className="fs-large fw-semibold">
              Economic and Trade Highschool, Bečej
            </h4>
            <p className="text-dark-300">
              Secondary education - Commercialist (2017–2021)
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 credential">
          <h2 className="fs-h2 fw-bold">Skills</h2>
          <div className="skills">
            My technical toolkit is built on a solid foundation of HTML, CSS,
            JavaScript, and TypeScript. I excel in using React and Next.js to
            create dynamic and efficient web applications. With Tailwind CSS and
            SCSS in my arsenal, I focus on delivering visually appealing designs
            while maintaining clean and organized code. Have a look at the full
            stack bellow!
          </div>
        </div>
      </div>
      <div className="aboutButtons">
        <div>
          <Link to="/contact">
            <Button variant="secondary" size="small">
              Contact Me
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/stack">
            <Button variant="secondary" size="small">
              View Stack
            </Button>
          </Link>
        </div>
      </div>
      <ExperienceSection />
    </div>
  );
}
