/**
 * @fileoverview This file contains constants which affect the display of the visualizer.
 */

/**
 * Coefficient for the impact of the frequency response on the bar height (length)
 * Value must be greater than 0 to render the visualizer bars.
 * It is NOT capped at 1
 */
export const BAR_HEIGHT_MODIFIER = 0.6;

// Width of the bars (thickness)
export const BAR_WIDTH = 3;

// Dimensions of the visualizer's canvas (square width/height)
export const CANVAS_SIZE = 500;

// Radius of the circle around which the visualizer bars are drawn
export const RADIUS = 0.4 * (CANVAS_SIZE / 2);

// Number of visualizer bars to render
export const NUM_BARS = 70;

/**
 * The coefficients which calculate the color of the bars based on the frequency response.
 *
 * Changing these coefficients will not only change the color of the bars,
 * but also how much the colors change based on the frequency range that the bar is representing.
 */
const R_COEFF = 2;
const G_COEFF = 1 / 1.1;
const B_COEFF = 1.8;

export const getBarColor = (val) => {
  const r = val / R_COEFF;
  const g = val / G_COEFF;
  const b = val / B_COEFF;
  return `rgb(${r}, ${g}, ${b})`;
};
