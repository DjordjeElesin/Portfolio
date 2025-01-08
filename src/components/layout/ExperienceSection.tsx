import { Devices } from "@phosphor-icons/react";

export default function ExperienceSection() {
  return (
    <div className="experienceMainContr">
      <h2 className="fs-h2 fw-bold">Experience</h2>
      <div className="experienceContr">
          <Devices size={20} />
          <div>
            <h4 className="fs-large fw-bold">Frontend Developer Internships</h4>
            <div className="flex flex-col gap-4 mt-3">
              <p className="fs-base fw-semibold text-dark-200 leading-4 expComp">
                Studio Present <br />
                <span className="fs-small text-dark-300">2024 July</span>
              </p>
              <p className="fs-base fw-semibold text-dark-200 leading-4 expComp">
                Inspira Group<br />
                <span className="fs-small text-dark-300">2024 July - September</span>
              </p>
              <p className="fs-base fw-semibold text-dark-200 leading-4 expComp">
                HTEC Group<br />
                <span className="fs-small text-dark-300">2024 October - Present</span>
              </p>
            
            </div>
          </div>
      </div>
    </div>
  );
}
