const context = new AudioContext();

// Activates the clicked tab and starts playing the song
function playSong(song) {
    /**
     * Starts playing the song
     */
    const audio = document.getElementById("audio");

    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }

    switch (song) {
        case "thisTown":
            audio.src = "thisTown.mp3";
            break;
        case "breakingHeart":
            audio.src = "breakingHeart.mp3";
            break;
        case "fadingOut":
            audio.src = "fadingOut.mp3";
            break;
        default:
            break;
    }

    audio.load();
    audio.play();

    /**
     * Updates the button styles
     */
    const y = document.getElementsByClassName("song-button");

    // Update the style of the buttons not clicked
    for (let i = 0; i < y.length; i++) {
        y[i].style.color = "red";
    }

    // Update the style of the clicked button
    document.getElementById(song).style.color = "blue";
}
