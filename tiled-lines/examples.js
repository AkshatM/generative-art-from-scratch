function setup() {
  // create a canvas of size 800 x 800
  // variables `width` and `height` are automatically assigned to this
  createCanvas(800, 800);

  // set the thickness of each line to 2 pixels
  strokeWeight(2);

  // prevent the draw function from constantly redrawing the page -
  // we only want to do it on command
  noLoop();
}

function draw() {
  // step is going to be the *length* of each line
  var step = width / 10;
  
  // start by selecting specific points on the page
  for (var x = 0; x < width; x += step) {
    for (var y = 0; y < width; y += step) {

      // change the colour randomly on each line segment
      var color = random(['blue', 'orange', 'red'])
      stroke(color)

      // roll a dice - if it comes up true more than 50% of the time...
      if (random() >= 0.5) {

        // draw a line with slope 1 and length equal to step
        line(x, y, x + step, y + step);

      } else {

        // draw a line with slope -1 and length equal to step
        line(x + step, y, x, y + step);

      }
    }
  }
}

// force draw() to happen just one more time when we double-click our mouse
function doubleClicked() {
  // but first paint over what we just made...
  background('white')
  redraw(1)
}