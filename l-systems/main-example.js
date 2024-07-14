// Credit: https://www.reddit.com/r/processing/comments/y4781w/randomising_l_systems_with_p5js_code_in_comments/

// Credit: https://www.reddit.com/r/processing/comments/y4781w/randomising_l_systems_with_p5js_code_in_comments/

let rules = {
  F: "FF"
};

const len = 1;
const ang = 90;
const numGens = 8;

let drawRules;

let word = "F+F+F+F";

function setup() {
  createCanvas(600, 600);
  
  strokeWeight(2);
  
  drawRules = {
    "F": () => {
      // Draw line forward, then move to end of line
      stroke("#9ea93f");
      line(0, 0, 0, -len);
      translate(0, -len);
    },
    "+": () => {
      // Rotate right
      rotate(PI/180 * -ang);
    },
  };
  
  noLoop();
}

function draw() {
  background(28);
  
  for(let i = 0; i < numGens; i ++) {
    word = generate();
  }
  
  // Draw L-System
  push();
  translate(width/2, height);
  for(let i = 0; i < word.length; i ++) {
    let c = word[i];
    if(c in drawRules) {
      drawRules[c]();
    }  
  }
  pop();
}

function generate() {
  let next = ""
  
  for(let i = 0; i < word.length; i ++) {
    let c = word[i];
    if(c in rules) {
      let rule = rules[c];
      next += rule; // Otherwise use the rule directly
    } else {
      next += c;
    }
  }
  
  return next;
}