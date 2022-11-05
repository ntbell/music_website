/**
 * Creates a canvas audio visualizer
 * Youtube video reference: https://www.youtube.com/watch?v=TpMPzX5CP3c
 * Code adapted from:       https://codesandbox.io/s/bold-pond-fqq22?file=%2Fsrc%2Findex.js
 */
export default function createVisualizer(analyser) {
    console.error("attaching");
    const myCanvas = document.getElementById("canvas");
    myCanvas.width = 500;
    myCanvas.height = 500;
    const ctx = myCanvas.getContext("2d");
    let freqs;

    freqs = new Uint8Array(analyser.frequencyBinCount);

    function draw() {
        // Clear the previous bars before rendering a new frame
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

        // Set the radius of the circle
        let radius = 100;

        // Set the number of bars
        let bars = 75;

        analyser.getByteFrequencyData(freqs);

        // Draw bars
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

            // Set the color of the bars
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
        requestAnimationFrame(draw);
    }

    draw();
}
