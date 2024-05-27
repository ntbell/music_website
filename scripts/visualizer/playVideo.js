import { MAX_AUTOPLAY_RETRIES, RETRY_DELAY } from "./constants.js";

/**
 * Robust autoplay for video elements. This is required to trigger autoplay when apple devices are in low power mode
 * https://discourse.webflow.com/t/autoplay-video-not-playing-on-low-power-mode/215057
 *
 * Retry the autoplay MAX_AUTOPLAY_RETRIES time(s) with a delay of RETRY_DELAY
 * @param {Integer} retries Tracks the number of times that we've retried this fn
 */
export default async function autoplayVideo() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const hideEl = isSafari ? "video" : "pseudoVideo";
  document.getElementById(hideEl).remove();
  //   const videoEl = document.getElementsByTagName("video")[0];
  //   const isStopped = Boolean(videoEl.paused || videoEl.ended);

  //   if (isStopped && retries < MAX_AUTOPLAY_RETRIES) {
  //     try {
  //       await videoEl.play();
  //     } catch (err) {
  //       setTimeout(() => {
  //         autoplayVideo(retries + 1);
  //       }, RETRY_DELAY);
  //     }
  //   }
}
