import React, { useState } from 'react';
import { MusicOptionButton } from './MusicOptionButton';
import { TrackBuilder } from './TrackBuilder';
import './MusicContainer.css';

const byte1 = require("../static/sounds/byte1.mp3");
const byte2 = require("../static/sounds/byte2.mp3");
const byte3 = require("../static/sounds/byte3.mp3");
const byte4 = require("../static/sounds/byte4.mp3");

export interface MusicOption {
  text: string;
  url: string;
}

export const MusicContainer = () => {
  const [tracks, setTracks] = useState<MusicOption[]>([]);

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

    const currentTrack = new Audio(tracks[idx].url)
    currentTrack.addEventListener('ended', () => {
      playTrackByIndex(idx + 1);
    });

    currentTrack.play();
  }

  const addTrack = (option: MusicOption) => {
    const newTracks = [...tracks, option];
    setTracks(newTracks);
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
          (audio) => <MusicOptionButton key={audio.text} option={audio} onClick={() => {
            addTrack(audio);
          }}/>
        )}
      </div>
      <div style={{ paddingTop: '32px', display: 'flex', justifyContent: 'center' }}>
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