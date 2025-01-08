import { StackType } from '../../utils/types/Types';
import '../../style/components/ui/StackCard.scss'

type StackCardProps = StackType & {
  isExpanded: boolean;
};

export default function StackCard({
  isExpanded,
  imageSrc,
  title,
  subtitle,
  text,
}: StackCardProps) {
  return (
    <div className="stackCardContr">
      <div className="stackCardHeading">
        <div className="stackCardImgContr">
          <img alt="stack icon" src={imageSrc} />
        </div>
        <div>
          <h3 className="fs-large fw-bold">{title}</h3>
          <p className="text-dark-300">{subtitle}</p>
        </div>
      </div>
      {isExpanded && <p className="stackCardText">{text}</p>}
    </div>
  );
}
