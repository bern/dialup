import './TrackBuilder.css';
import { MusicOption } from './MusicContainer';

interface TrackBuilderProps {
  tracks: MusicOption[];
}

export const TrackBuilder = (props: TrackBuilderProps) => {
  const { tracks } = props;

  return (
    <div className="trackBuilder" style={{ width: '100%', height: '100px', border: '3px solid black', overflow: 'scroll', padding: '4px' }}>
      {tracks.map((track) => {
        return (
          <>
            [{track.text}]
          </>
        )
      })}
    </div>
  );
};
