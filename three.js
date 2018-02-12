

sketch.js 
1
​
2
var ball;
3
var p1, p2;
4
var p1Score = 0;
5
var p2Score = 0;
6
var p1Up = false;
7
var p1Down = false;
8
var p2Up = false;
9
var p2Down = false;
10
var margin = 20;
11
var cnv;
12
var paddleBounceSFX, hitColliderSFX;
13
var collider;
14
​
15
function preload() {
16
​
17
}
18
​
19
function centerCanvas() {
20
  var x = (windowWidth - width) / 2;
21
  var y = (windowHeight - height) / 2;
22
  cnv.position(x, y);
23
}
24
​
25
function windowResized() {
26
  centerCanvas();
27
}
28
​
29
function setup() {
30
  paddleBounceSFX = loadSound('assets/ballCollide.mp3', function() { console.log("loaded"); });
31
  hitColliderSFX = loadSound('assets/hitCollider.mp3', function() { console.log("loaded"); });
32
  cnv = createCanvas(900, 500);
33
  centerCanvas();
34
  ball = new Ball();
35
  p1 = new Paddle(0);
36
  p2 = new Paddle(1);
37
  collider = new Collider();
38
}
39
​
40
function draw() {
41
  background(0);
42
  drawField();
43
​
44
  p1.move(p1Up, p1Down);
45
  p2.move(p2Up, p2Down);
46
​
47
  ball.update();
