import React, { useState } from 'react';
import { MusicOption } from './MusicOption';
import { TrackBuilder } from './TrackBuilder';
import './MusicContainer.css';

const byte1 = require("../static/sounds/byte1.mp3");
const byte2 = require("../static/sounds/byte2.mp3");
const byte3 = require("../static/sounds/byte3.mp3");
const byte4 = require("../static/sounds/byte4.mp3");

export const MusicContainer = () => {
  const [tracks, setTracks] = useState<string[]>([]);

  const resetTracks = () => {
    setTracks([]);
  }

  const addTrack = (url: string) => {
    const trackName = musicOptions.find((option) => option.url === url)?.text || '';
    const newTracks = [...tracks, trackName];
    setTracks(newTracks);
  }

  const musicOptions = [{
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
          (audio) => <MusicOption key={audio.text} text={audio.text} url={audio.url} onClick={() => {
            addTrack(audio.url);
          }}/>
        )}
      </div>
      <div style={{ paddingTop: '32px', display: 'flex', justifyContent: 'center' }}>
        <TrackBuilder tracks={tracks}/>
      </div>
      <div style={{ paddingTop: '16px', display: 'flex', justifyContent: 'space-evenly' }}>
        <div className="control">
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