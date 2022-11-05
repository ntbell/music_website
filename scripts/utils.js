import createVisualizer from "./visualizer.js";

// ToDo: Fix the AudioContext being called immediately when refreshed
// It must be called in response to a click event
// Call instead inside of the playSong if it doesn't exist yet?
const audio = document.getElementById("audio");
const context = new (window.AudioContext || window.webkitAudioContext)();
const analyser = context.createAnalyser();
const source = context.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(context.destination);
let prevSong = "";

window.onload = createVisualizer(analyser);

// Plays the selected song
export default function playSong(song) {
    if (song !== prevSong) {
        // Pause and reset the current song if a new one is clicked
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }

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

        // Load and play the new song
        audio.load();
        audio.play();
        prevSong = song;
    }
}

document
    .getElementById("thisTown")
    .addEventListener("click", () => playSong("thisTown"));
document
    .getElementById("breakingHeart")
    .addEventListener("click", () => playSong("breakingHeart"));
document
    .getElementById("fadingOut")
    .addEventListener("click", () => playSong("fadingOut"));
