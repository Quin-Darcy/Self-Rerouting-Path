let W = window.innerWidth;
let H = window.innerHeight;
let curve;
let SEG_LENGTH = 8;
let MAX_SEGS = 10000;
let PATH_WIDTH = 2;
let AREA = W*H;


function setup() {
    createCanvas(W, H);
    curve = new Curve(SEG_LENGTH, MAX_SEGS, createVector(W/2, H/2));
}

function draw() {
    curve.show();
    curve.find_new_seg2();
}

function mousePressed() {
    curve = new Curve(SEG_LENGTH, MAX_SEGS, createVector(mouseX, mouseY));
}

function doubleClicked() {
    noLoop();
}