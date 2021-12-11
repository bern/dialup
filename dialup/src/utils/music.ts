import * as Tone from 'tone';

export function playUrlWithDiff(url: string, diff: number, onEnded?: () => void) {
  const player = new Tone.Player(url);
  //create a distortion effect
  const distortion = new Tone.PitchShift(diff);
  //connect a player to the distortion
  player.connect(distortion);

  distortion.toDestination();

  Tone.loaded().then(() => {
    player.start();

    player.onstop = (() => {
      if(onEnded) {
        onEnded();
      }
    })
  });
}

// const context = new AudioContext();

// export function loadSample(url: string) {
//   return fetch(url)
//     .then(response => response.arrayBuffer())
//     .then(buffer => context.decodeAudioData(buffer));
// }

// export function playSample(sample: AudioBuffer, sampleNote: number, noteToPlay: number) {
//   const source = context.createBufferSource();
//   source.buffer = sample;
//   source.playbackRate.value = 2 ** ((noteToPlay - sampleNote) / 12);
//   source.connect(context.destination);
//   source.start(0);
// }