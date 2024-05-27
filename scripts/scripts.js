import autoplayVideo from "./visualizer/playVideo.js";
import playSongOnClick from "./visualizer/playSong.js";

window.onload = () => {
  autoplayVideo();
  playSongOnClick();
};

const videoEl = document.getElementsByTagName("video")[0];
videoEl.addEventListener("onsuspend", () => autoplayVideo());

export default { autoplayVideo, playSongOnClick };
