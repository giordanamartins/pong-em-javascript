let circleX = 300;
let circleY = 200;
let circleDiameter = 20;
let speedX = 5;
let speedY = 5;
let radius = circleDiameter /2;
let rectX = 10;
let rectY = 150;
let rectLenght = 10;
let rectHeight = 90;
let rect2X = 580;
let rect2Y = 150;
let speedYracket;
let points = 0;
let points2 = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showCircle();
  circleMovement();
  borderColission();
  showRacket();
  racketMovement();
  racketColission();
  show2Racket();
  racket2Movement();
  racket2Colission();
  includeScore();
  scoring();
  //multiplayer();
  circleStuck();
}

function showCircle(){
  circle(circleX, circleY, circleDiameter)
}

function circleMovement(){
  circleX += speedX
  circleY += speedY
}

function borderColission(){
  if (circleX + radius > width || circleX - radius < 0){
    speedX *= -1;
  }
  
  if (circleY + radius > height || circleY - radius < 0){
    speedY *= -1;
  }
}

function showRacket(){
    rect(rectX, rectY, rectLenght, rectHeight)
  }

function racketMovement(){
  if(keyIsDown(UP_ARROW)){
    rectY -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    rectY += 10;
  }
}

function racketColission(){
  if (circleX - radius < rectX + rectLenght && circleY - radius < rectY + rectHeight && circleY + radius > rectY){
    speedX *= -1;
  }
}

function show2Racket(){
    rect(rect2X, rect2Y, rectLenght, rectHeight)
  }

function racket2Movement(){
  speedYracket = circleY - rect2Y - rectLenght /2 - 30;
  rect2Y += speedYracket
}

function racket2Colission(){
  if (circleX + radius > rect2X - rectLenght){
    speedX *= -1;
  }
}

function includeScore(){
  stroke(255)
  textAlign(CENTER);
  textSize(15);
  fill(color(30,144,255));
  rect(150, 10, 40, 20);
  fill(255);
  text(points, 170, 26);
  fill(color(30,144,255));
  rect(450, 10, 40, 20);
  fill(255);
  text(points2, 470, 26);
}

function scoring(){
  if (circleX > 590){
    points += 1;
  }
  if (circleX < 10){
    points2 += 1;
  }
}

function multiplayer(){
  if(keyIsDown(87)){
    rect2Y -= 10;
  }
  if(keyIsDown(83)){
    rect2Y += 10;
  }
}

function circleStuck(){
    if (circleX - radius < 0){
    circleX = 23
    }
}
