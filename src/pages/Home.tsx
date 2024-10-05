import React, { useMemo } from "react";
import Button from "../components/ui/Button";
import "../style/pages/Home.scss";
import { Link } from "react-router-dom";
import StackCard from "../components/ui/StackCard";
import { StackCardType, stackData } from "../utils/StackData";
import { Fingerprint } from "@phosphor-icons/react";

export default function Home() {
  const shuffledCards: StackCardType[] = useMemo(
    () => [...stackData].sort(() => 0.5 - Math.random()),
    []
  );

  const selectedCards = shuffledCards.slice(0, 4);

  return (
    <div className="homeContr">
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
      <div className="stackMainContr">
        <h1 className="fs-h2 fw-bold">Stack</h1>
        <div className="stackContentContr">
          {selectedCards.map((stack: StackCardType, idx: number) => (
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
