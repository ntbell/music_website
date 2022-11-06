import createVisualizer from "./visualizer.js";

// Get the audio element
const audio = document.getElementById("audio");

// Initialize global vars
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

        // Available song selections
        switch (song) {
            case "thisTown":
                audio.src = "../music/thisTown.mp3";
                break;
            case "breakingHeart":
                audio.src = "../music/breakingHeart.mp3";
                break;
            case "fadingOut":
                audio.src = "../music/fadingOut.mp3";
                break;
            default:
                break;
        }

        audio.load();
        audio.play();
        prevSong = song;
    }
}

function attachListeners() {
    document
        .getElementById("thisTown")
        .addEventListener("click", () => playSong("thisTown"));
    document
        .getElementById("breakingHeart")
        .addEventListener("click", () => playSong("breakingHeart"));
    document
        .getElementById("fadingOut")
        .addEventListener("click", () => playSong("fadingOut"));
}

window.onload = attachListeners();
