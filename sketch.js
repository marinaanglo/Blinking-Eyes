var eyes
var leftEye
var leftPup
var rightEye
var rightPup
var sec
let dropY = 170

function setup() {
  createCanvas(400, 400);
  eyes = new Eye()
}

function draw() {
  background(240, 193, 128);
  makeEyes();
}

function makeEyes(){
  eyes.display()
  eyes.blinkEye()
  
}
class Eye { 
  
  display() {
    fill(255,255,255)
    leftEye = ellipse(100, 146, 75, 45)
    fill(255,255,255)
    rightEye = ellipse(300, 146, 75, 45)
    fill(0,0,0)
    leftPup = ellipse(100, 146, 35, 35)
    fill(0,0,0)
    rightPup = ellipse(300, 146, 35, 35)
    arc(100, 100, 90, 35, 0, PI)
    arc(300, 100, 90, 35, 0, PI)
    fill(240, 193, 128)
    arc(200, 200, 30, 35, 0, PI)
    arc(200, 270, 200, 10, 0, PI)
  }
  
  
  blinkEye() {
    
    sec = second()
    if (sec % 2 == 0) {
      clear()
      background(240, 193, 128)
      fill(0,0,0)
      arc(100, 100, 90, 35, 0, -PI)
      arc(300, 100, 90, 35, 0, -PI)
      fill(240, 193, 128)
      arc(200, 200, 30, 35, 0, PI)
      arc(100, 146, 75, 45, 0, PI);
      arc(300, 146, 75, 45, 0, PI);
      fill(255,255,255)
      arc(200, 270, 200, 70, 0, PI, CHORD)
      
      }
      
    
  }

}