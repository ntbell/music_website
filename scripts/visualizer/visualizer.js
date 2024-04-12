import draw from "./draw.js";
import { CANVAS_SIZE } from "./constants.js";

/**
 * Creates a canvas audio visualizer
 * Youtube video reference: https://www.youtube.com/watch?v=TpMPzX5CP3c
 * Code adapted from:       https://codesandbox.io/s/bold-pond-fqq22?file=%2Fsrc%2Findex.js
 */
export default function createVisualizer(audio) {
  // Initialize and connect the visualizer to the audio
  const audioContext = new (window.AudioContext || window.AudioContext)();
  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // Grab the canvas element
  const canvas = document.getElementById("canvas");
  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  // Bin the audio into frequency bands
  const freqs = new Uint8Array(analyser.frequencyBinCount);

  // Initiate the first animation frame draw
  draw(analyser, canvas, freqs);
}
