import './MusicOptionButton.css';

interface MusicOptionPanelProps {
  activeTone: number;

  onClick: (diff: number) => void;
}

export const MusicOptionPanel = (props: MusicOptionPanelProps) => {
  const { activeTone, onClick } = props;

  const semitones = [];
  for (let i = -12; i <= 12; i++) {
    semitones.push(i);
  }

  return (
    <div style={{ width: '100%' }}>
      <div id="pitch-buttons" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          semitones.map((diff) => {
            return (
              <div className={`btn ${activeTone === diff ? `btn__isActive` : ''}`} style={{ width: '50px' }} onClick={() => {
                onClick(diff);
              }}>
                {diff < 0 ? `${diff}` : `+${diff}`}
              </div>
            );
          })
        }
      </div>
    </div>
  );
};