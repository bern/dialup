import './TrackBuilder.css';
import { Track } from './MusicContainer';

interface TrackBuilderProps {
  tracks: Track[];
}

export const TrackBuilder = (props: TrackBuilderProps) => {
  const { tracks } = props;

  return (
    <div className="trackBuilder" style={{ width: '100%', border: '3px solid black', overflow: 'scroll', padding: '4px' }}>
      {tracks.map((track) => {
        return (
          <>
            {`[${track.option.text} ${track.diff < 0 ? `${track.diff}` : `+${track.diff}`}]`}
          </>
        )
      })}
    </div>
  );
};
