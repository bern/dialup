import './MusicOptionButton.css';
import { MusicOption } from './MusicContainer';

interface MusicOptionProps {
  option: MusicOption;

  onClick: () => void;
}

export const MusicOptionButton = (props: MusicOptionProps) => {
  const { option, onClick } = props;

  return (
    <div className="btn" onClick={() => {
      new Audio(option.url).play();
      onClick();
    }}>
      {option.text}
    </div>
  )
}