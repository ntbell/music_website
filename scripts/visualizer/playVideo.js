/**
 * Robust autoplay for video elements.
 * Apple devices require a workaround for autoplaying videos in low-power mode.
 *
 * Both <img /> (Apple) & <video /> (Others) elements are initially in the DOM with { display: hidden }
 * Remove one of these elements and display the other.
 */
export default async function autoplayVideo() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [hideEl, showEl] = isSafari
    ? ["video", "pseudoVideo"]
    : ["pseudoVideo", "video"];

  const hiddenEl = document.getElementById(hideEl);
  const shownEl = document.getElementById(showEl);

  // Remove the hidden element from the DOM
  hiddenEl.remove();
  // Remove the { display: none } property from the shown element
  shownEl.style.display = "block";
}
