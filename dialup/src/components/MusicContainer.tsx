import React, { useState } from 'react';
import { MusicOptionButton } from './MusicOptionButton';
import { MusicOptionPanel } from './MusicOptionPanel';
import { TrackBuilder } from './TrackBuilder';
import './MusicContainer.css';
import './MusicOptionButton.css';
import { tone } from '../utils/music';

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

    const currentTrack = new Audio(tracks[idx].url)
    currentTrack.addEventListener('ended', () => {
      playTrackByIndex(idx + 1);
    });

    currentTrack.play();
  }

  const addTrack = () => {//option: MusicOption) => {
    if (selectedTrack) {
      const newTracks = [...tracks, selectedTrack];
      setTracks(newTracks);
    }
  }

  const playSelection = (forceTrack?: MusicOption, forceDiff?: number) => {
    console.log({
      forceDiff,
      selectedDiff
    })

    if (selectedTrack || forceTrack) {
      console.log({
        track: forceTrack ? forceTrack.text : selectedTrack!.text,
        diff: (forceDiff !== undefined) ? forceDiff : selectedDiff
      })
      tone(forceTrack ? forceTrack.url : selectedTrack!.url, forceDiff ? forceDiff : selectedDiff);
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
          console.log('just selected diff', diff)
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