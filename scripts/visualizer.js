/**
 * Creates a canvas audio visualizer
 * Youtube video reference: https://www.youtube.com/watch?v=TpMPzX5CP3c
 * Code adapted from:       https://codesandbox.io/s/bold-pond-fqq22?file=%2Fsrc%2Findex.js
 */
export default function createVisualizer(audio) {
    // Initialize and connect the visualizer to the audio
    const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    // Grab the canvas element
    const myCanvas = document.getElementById("canvas");
    myCanvas.width = 500;
    myCanvas.height = 500;
    const ctx = myCanvas.getContext("2d");

    // Bin the audio into frequency bands?
    let freqs;
    freqs = new Uint8Array(analyser.frequencyBinCount);

    // Draws the audio visualizer bars per animation frame
    function draw() {
        // Clear the previous visualizer bars before rendering a new frame
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

        // Set the radius of the circle
        let radius = 100;

        // Set the number of bars
        let bars = 75;

        // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
        analyser.getByteFrequencyData(freqs);

        // Draw bars with the frequency data, in the shape of a circle around the .webm video
        for (var i = 0; i < bars; i++) {
            let radians = (Math.PI * 2) / bars;
            // Set the length of the bars
            let bar_height = freqs[i] * 0.55;

            let x = myCanvas.width / 2 + Math.cos(radians * i) * radius;
            let y = myCanvas.height / 2 + Math.sin(radians * i) * radius;
            let x_end =
                myCanvas.width / 2 +
                Math.cos(radians * i) * (radius + bar_height);
            let y_end =
                myCanvas.height / 2 +
                Math.sin(radians * i) * (radius + bar_height);

            // Set the color of the bars (to green-ish) dynamically in response to the frequency bands
            const r = freqs[i] / 2;
            const g = freqs[i] * 1.1;
            const b = freqs[i] / 1.8;
            const color = `rgb(${r}, ${g}, ${b})`;

            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x_end, y_end);
            ctx.stroke();
        }

        // Callback to draw the next animation frame
        requestAnimationFrame(draw);
    }

    // Initiate the first animation frame draw
    draw();
}
