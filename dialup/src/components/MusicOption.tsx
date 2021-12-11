import './MusicOption.css';

interface MusicOptionProps {
  text: string;
  url: string;

  onClick: () => void;
}

export const MusicOption = (props: MusicOptionProps) => {
  const { text, url, onClick } = props;

  return (
    <div className="btn" onClick={() => {
      new Audio(url).play();
      onClick();
    }}>
      {text}
    </div>
  )
}