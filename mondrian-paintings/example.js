function setup() {
  // setup our canvas
  createCanvas(600, 600);

  // make sure our squares are nice and thicc
  strokeWeight(5);

  // either fill the whole canvas, or cut it up into smaller rectangles
  partition(0, 0, width, height, 6)
}

function partition(x, y, max_width, max_height, limit) {

  // decide if we want to cut this rectangle up along the X-axis
  var partitionAlongX = Math.random() > 0.3;

  // decide if we want to cut this rectangle up along the X-axis
  var partitionAlongY = Math.random() > 0.3;
  
  // pick a random color 
  if (Math.random() > 0.6) {
    fill(random(["red", "gold", "blue"]))
  } else {
    fill("white")
  }

  // *always* draw a rectangle that covers the whole plane
  // - we will draw over it if we choose to partition
  rect(x, y, max_width, max_height)
  
  // `limit` controls the number of smaller rectangles allowed.
  // Without this, we could endlessly draw smaller rectangles if 
  // `partitionAlongX` and `partitionAlongY` always return true
  if (limit == 0) {
    return;
  }
  
  let width_split = max_width
  let height_split = max_height
  
  // randomly pick a point along the y-axis to split this square
  if (partitionAlongY) {
    height_split = max_height * random(0.4, 0.6);
  }
  
  // randomly pick a point along the x-axis to split this square
  if (partitionAlongX) {
    width_split = max_width * random(0.4, 0.6);
  }
  
  // split into four squares, each of which may be partitioned further
  partition(x, y, width_split, height_split, limit - 1);
  partition(x + width_split, y + height_split, max_width - width_split, max_height - height_split, limit - 1);
  partition(x, y + height_split, width_split, max_height - height_split, limit - 1);
  partition(x + width_split, y, max_width - width_split, max_height, limit - 1);
  

}