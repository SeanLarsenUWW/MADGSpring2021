function setup() {
  // put setup code here
  createCanvas(200,200);
  background(1);
}

function draw() {
background(1);
rectMode(CENTER);

// Street
stroke(50);
fill(50);
rect(100, 175, 220, 50);

rectMode(CORNER);
//Street Lines
stroke(80);
fill(80);
rect(10, 170, 20, 10);
rect(50, 170, 20, 10);
rect(90, 170, 20, 10);
rect(130, 170, 20, 10);
rect(170, 170, 20, 10);

//Buildings
stroke(15);
fill(25);
rect(25,49,50,100);
rect(125,49,50,100);
rect(75,74,50,75);

rectMode(CENTER);
//Doors
noFill();
stroke(15);
rect(50,139,10,20);
rect(100,139,10,20);
rect(150,139,10,20);

ellipseMode(CENTER);
//Moon
noStroke();
fill(225);
ellipse(100, 30, 35, 35);

//Crater
noStroke();
fill(180);
ellipse(90,30,4,4);
ellipse(110,30,4,4);
ellipse(100,40, 7,7);

//windows
noStroke();
fill(110);
ellipse(40, 65,10,10);
ellipse(60, 65,10,10);
ellipse(40, 85,10,10);
ellipse(60, 85,10,10);
ellipse(40, 105,10,10);
ellipse(60, 105,10,10);
ellipse(160, 65,10,10);
ellipse(140, 65,10,10);
ellipse(160, 85,10,10);
ellipse(140, 85,10,10);
ellipse(160, 105,10,10);
ellipse(140, 105,10,10);
ellipse(90, 85,10,10);
ellipse(110, 85,10,10);
ellipse(90, 105,10,10);
ellipse(110, 105,10,10);
}