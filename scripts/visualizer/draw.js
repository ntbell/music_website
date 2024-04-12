import {
  BAR_HEIGHT_MODIFIER,
  BAR_WIDTH,
  getBarColor,
  NUM_BARS,
  RADIUS,
} from "./constants.js";

/**
 * Draw the audio visualizer bars on the canvas per animation frame.
 */
export default function draw(analyser, canvas, freqs) {
  // Clear the previous visualizer bars before rendering a new frame
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
  analyser.getByteFrequencyData(freqs);

  /**
   * Draw bars with the frequency data, in the shape of a circle of RADIUS around the .webm video.
   * This loop is creating NUM_BAR bars, and setting their position, length, and color.
   */
  for (var i = 0; i < NUM_BARS; i++) {
    const barHeight = freqs[i] * BAR_HEIGHT_MODIFIER;
    const radians = (Math.PI * 2) / NUM_BARS;

    // Position where the current bar begins
    const x = canvas.width / 2 + Math.cos(radians * i) * RADIUS;
    const y = canvas.height / 2 + Math.sin(radians * i) * RADIUS;

    // Position where the current bar ends
    const x_end =
      canvas.width / 2 + Math.cos(radians * i) * (RADIUS + barHeight);
    const y_end =
      canvas.height / 2 + Math.sin(radians * i) * (RADIUS + barHeight);

    // Set the color of the bars (to green-ish) dynamically in response to the frequency bands
    const color = getBarColor(freqs[i]);

    // Draw the resulting bar on the canvas
    ctx.strokeStyle = color;
    ctx.lineWidth = BAR_WIDTH;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x_end, y_end);
    ctx.stroke();
  }

  // Callback to draw the next animation frame
  requestAnimationFrame(() => draw(analyser, canvas, freqs));
}
