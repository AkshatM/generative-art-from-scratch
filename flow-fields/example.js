function setup() {
  createCanvas(600, 600);
  background('black')

  // Set the noise level and scale.
  let noiseLevel = 255;
  let noiseScale = 0.009;
  
  for (let y = 0; y < height; y += 10) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 10) {
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;

      // Compute the noise value.
      let c = noise(nx, ny);

      // Draw a line heading in the direction generated
      stroke(random(['purple', 'gold', 'red']));
      line(x, y, x + 20*cos(c), y + 20*sin(c));
    }
  }
}