import * as Tone from 'tone';

export function tone(url: string, diff: number) {
  const player = new Tone.Player(url).toDestination();
  // //create a distortion effect
  // const distortion = new Tone.PitchShift(diff).toDestination();
  // //connect a player to the distortion
  // player.connect(distortion);

  Tone.loaded().then(() => {
    player.start();
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