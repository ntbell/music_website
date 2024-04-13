import { SONG_LINKS_BY_NAME, SONG_NAMES } from "./songsDict.js";
import createVisualizer from "./visualizer.js";

// Get the audio element
const audio = document.getElementById("audio");

// Initialize vars
let prevSong = "";
let firstSong = true;

/**
 * Plays the selected song and adds a visualizer
 * @param {String} song The song to play
 */
export default function playSong(song) {
  if (firstSong) {
    // Show the audio player
    // Create and attach the analyser
    firstSong = false;
    audio.removeAttribute("hidden");
    createVisualizer(audio);
  }

  if (song !== prevSong) {
    // Pause and reset the current song if a new one is clicked
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Link the .mp3 to the audio.src
    const songLink = SONG_LINKS_BY_NAME[song];
    if (songLink) audio.src = songLink;

    audio.load();
    audio.play();
    prevSong = song;
  }
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
