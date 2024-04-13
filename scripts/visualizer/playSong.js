import { SONG_LINKS_BY_NAME, SONG_NAMES } from "./songsDict.js";
import createVisualizer from "./visualizer.js";

const audio = document.getElementById("audio");
let prevSong = "";
let firstSong = true;

/**
 * Plays the selected song and adds a visualizer
 * @param {String} song The song to play
 */
export default function playSong(song) {
  // Create and attach the analyser
  if (firstSong) {
    firstSong = false;
    createVisualizer(audio);
  }

  // Play or pause the audio?
  if (song !== prevSong) {
    // Link the .mp3 to the audio.src
    const songLink = SONG_LINKS_BY_NAME[song];
    if (songLink) audio.src = songLink;

    // Update the audio element after changing the source or settings
    audio.load();
    audio.play();
  } else {
    audio.paused ? audio.play() : audio.pause();
  }

  prevSong = song;
}

function attachListeners() {
  // Play the song when we click on the Id === SONG_NAME
  Object.values(SONG_NAMES).forEach((song) => {
    document
      .getElementById(song)
      ?.addEventListener("click", () => playSong(song));
  });
}

window.onload = attachListeners();
