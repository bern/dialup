import './MusicOptionButton.css';
import { MusicOption } from './MusicContainer';

interface MusicOptionProps {
  option: MusicOption;
  isActive: boolean;

  onClick: () => void;
}

export const MusicOptionButton = (props: MusicOptionProps) => {
  const { option, onClick, isActive } = props;

  return (
    <div className={`btn ${isActive ? `btn__isActive` : ''}`} onClick={() => {
      onClick();
    }}>
      {option.text}
    </div>
  )
}