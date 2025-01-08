import { stackData } from "../utils/data/StackData";
import StackCard from "../components/ui/StackCard";
import "../style/pages/Stack.scss";

export default function Stack() {
  return (
    <div className="stackPageContr">
      <h1 className="fs-h1 fw-bold lh-large">
        My Frontend Skillset: Building Dynamic Digital Experiences
      </h1>
      <div className="stacksContr">
        {stackData.map((stack) => (
          <StackCard
            key={stack.title}
            isExpanded
            imageSrc={stack.imageSrc}
            title={stack.title}
            subtitle={stack.subtitle}
            text={stack.text}
          />
        ))}
      </div>
    </div>
  );
}
