import React, { useState } from 'react';
import { MusicOptionButton } from './MusicOptionButton';
import { MusicOptionPanel } from './MusicOptionPanel';
import { TrackBuilder } from './TrackBuilder';
import './MusicContainer.css';
import './MusicOptionButton.css';
import { playUrlWithDiff } from '../utils/music';

const byte1 = require("../static/sounds/byte1.mp3");
const byte2 = require("../static/sounds/byte2.mp3");
const byte3 = require("../static/sounds/byte3.mp3");
const byte4 = require("../static/sounds/byte4.mp3");

export interface MusicOption {
  text: string;
  url: string;
}

export interface Track {
  option: MusicOption;
  diff: number;
}

export const MusicContainer = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<MusicOption>();
  const [selectedDiff, setSelectedDiff] = useState<number>(0);

  const resetTracks = () => {
    setTracks([]);
  }

  const playTracks = () => {
    playTrackByIndex(0);
  }

  const playTrackByIndex = (idx: number) => {
    if (idx >= tracks.length) {
      return;
    }

    playUrlWithDiff(tracks[idx].option.url, tracks[idx].diff, () => {
      playTrackByIndex(idx + 1);
    })
  }

  const addTrack = () => {//option: MusicOption) => {
    if (selectedTrack) {
      const newTracks: Track[] = [...tracks, {
        option: selectedTrack,
        diff: selectedDiff
      }];
      setTracks(newTracks);
    }
  }

  const playSelection = (forceTrack?: MusicOption, forceDiff?: number) => {
    if (selectedTrack || forceTrack) {
      playUrlWithDiff(forceTrack ? forceTrack.url : selectedTrack!.url, (forceDiff !== undefined) ? forceDiff : selectedDiff);
    }
  }

  const musicOptions: MusicOption[] = [{
    text: 'bee-dong',
    url: byte1.default
   },
   {
    text: 'o-ay-ay-o',
    url: byte2.default
   },
   {
    text: 'EEEEEEE',
    url: byte3.default
   },
   {
    text: 'skrggrgg',
    url: byte4.default
   }];

  return (
    <div>
      <div style={{ display: 'flex', paddingTop: '64px', justifyContent: 'space-between' }}>
        {musicOptions.map(
          (audio) => <MusicOptionButton isActive={audio.text === (selectedTrack && selectedTrack.text || '')} key={audio.text} option={audio} onClick={() => {
            setSelectedTrack(audio);
            playSelection(audio, undefined);
          }}/>
        )}
      </div>
      <div style={{ paddingTop: '32px' }}>
        <MusicOptionPanel activeTone={selectedDiff} onClick={(diff: number) => {
          setSelectedDiff(diff);
          playSelection(undefined, diff);
        }}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={`btn ${!selectedTrack ? 'btn__disabled' : ''}`} style={{alignItems: 'center', width: '50px', height: '100px', transform: 'rotate(90deg)'}} onClick={() => {
          addTrack();
        }}>{'>'}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TrackBuilder tracks={tracks}/>
      </div>
      <div style={{ paddingTop: '16px', display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="control" onClick={() => {
          playTracks();
        }}>
          [Play]
        </div>
        <div className="control" onClick={() => {
          resetTracks();
        }}>
          [Reset]
        </div>
      </div>
    </div>
  );
};