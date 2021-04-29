function setup() {
  // put setup code here
  createCanvas(500,500);
  background(1);
}

function draw() {

 background(1);
 
 ellipseMode(CENTER);
  //Moon
  noStroke();
  fill(225);
  ellipse(100, 60, 70, 70);

  //Crater
  noStroke();
  fill(180);
  ellipse(90,60,8,8);
  ellipse(110,60,8,8);
  ellipse(100,80, 14,14);

  //stars
  noStroke();
  fill(255);
  ellipse(200,200,5,5);
  ellipse(274,167,5,5);
  ellipse(30,402,5,5);
  ellipse(20,30,5,5);
  ellipse(354,452,5,5);
  ellipse(265,347,5,5);
  ellipse(480,480,5,5);
  ellipse(30,398,5,5);
  ellipse(150,348,5,5);
  ellipse(476,47,5,5);
  ellipse(301,50,5,5);
  ellipse(432,257,5,5);
  ellipse(247,197,5,5);
  ellipse(8,414,5,5);
  ellipse(124,245,5,5);
  ellipse(418,392,5,5);
  ellipse(366,188,5,5);
  ellipse(369,341,5,5);
  ellipse(86,151,5,5);
  ellipse(324,298,5,5);
  ellipse(202,88,5,5);
  ellipse(274,396,5,5);
  ellipse(14,359,5,5);
  ellipse(29,396,5,5);
  ellipse(31,311,5,5);
  ellipse(68,103,5,5);
  ellipse(202,424,5,5);
  ellipse(34,356,5,5);

  rectMode(CENTER);
  //space ship
  noStroke();
  fill("#b4b4b4");
  rect(250,300,300,100);
  arc(250,350,302,50,0,PI);
  triangle(100, 250, 50, 300, 100, 353);
  triangle(400, 250, 450, 300, 400, 353);

  colorMode(RGB);
  //alien
    //head
    noStroke();
    fill(0, 255, 8, 255);
    ellipse(250, 160, 100, 150);

    //eyes
    noStroke();
    fill(0,0,0,255);
    ellipse(225, 150, 20, 50);
    ellipse(275, 150, 20, 50);


    rectMode(CORNER);
    //body
    noStroke();
    fill(0, 255, 8, 255);
    rect(240, 200, 20, 50);

  //glass
  stroke(0,155,186,255);
  fill(0,213,255,150);
  arc(250,250,301,350,PI,0);

  //lights
  colorMode(HSB);
  noStroke();
  fill(270,76.08,100);
  ellipse(150,300,60,50);
  ellipse(250,300,60,50);
  ellipse(350,300,60,50);

  //lights glow
  colorMode(RGB);
  noStroke();
  fill(158,61,255,30);
  ellipse(150,300,100,75);
  ellipse(250,300,100,75);
  ellipse(350,300,100,75);

  //asteroid
  stroke(209, 99, 25, 225);
  fill(255,121,31,255);
  beginShape();
  vertex(400,75);
  vertex(410, 40);
  vertex(425, 43);
  vertex(438, 50);
  vertex(463, 54);
  vertex(495, 96);
  vertex(476, 148);
  vertex(440, 185);
  vertex(412, 190);
  vertex(385,150);
  vertex(374, 111);
  endShape();

  //Craters
  noStroke();
  fill(209, 99, 25, 225);
  quad(400, 100, 420, 104, 430, 108, 406, 130);
  quad(415, 50, 425, 70, 450, 85, 406, 90);
  quad(405, 170, 430, 180, 450, 160, 430, 135);
  quad(440, 140, 450, 110, 480, 100, 460, 135);

}