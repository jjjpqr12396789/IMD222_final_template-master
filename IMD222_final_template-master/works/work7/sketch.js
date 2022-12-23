// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let ps;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {
  background(200);

  ps.display();
  ps.update();
}

function mousePressed() {
  ps.shatter();
}
