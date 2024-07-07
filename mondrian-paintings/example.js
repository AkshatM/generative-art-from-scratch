function setup() {
  // setup our canvas
  createCanvas(600, 600);

  // make sure our squares are nice and thicc
  strokeWeight(10);

  // either fill the whole canvas, or cut it up into smaller rectangles
  partition(0, 0, width, height, 5)
}

function partition(x, y, max_width, max_height, limit) {

  // decide if we want to cut this rectangle up along the X-axis
  var partitionAlongX = Math.random() > 0.5;

  // decide if we want to cut this rectangle up along the X-axis
  var partitionAlongY = Math.random() > 0.5;
  
  // pick a random color 
  fill(random(["blue", "red", "gold", "white"]))

  // *always* draw a rectangle that covers the whole plane
  // - we will draw over it if we choose to partition
  rect(x, y, max_width, max_height)
  
  // `limit` controls the number of smaller rectangles allowed.
  // Without this, we could endlessly draw smaller rectangles if 
  // `partitionAlongX` and `partitionAlongY` always return true
  if (limit == 0) {
    return;
  }
  
  if (partitionAlongX) {
    let size = max_width * Math.random();
    // draw a square that forms the left half of the current square
    partition(x, y, size, max_height, limit - 1)
    // draw a square that forms the right half of the current square
    partition(x + size, y, max_width - size, max_height, limit - 1)
  } 
  
  if (partitionAlongY) {
    let size = max_height * Math.random();
    // draw a square that forms the upper half of the current square
    partition(x, y, max_width, size, limit - 1);
    // draw a square that forms the lower half of the current square
    partition(x, y + size, max_width, max_height - size, limit - 1)
  }
}