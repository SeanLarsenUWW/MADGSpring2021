var xPosition = -144;
var xSpeed = 2;
var toppingType = 0;

function setup() {
  // put setup code here
  createCanvas(600,600);
  
}

function draw() {
  strokeWeight(1);
  ellipseMode(CENTER);
  
  //Pizza Stop
  if(xPosition != 300) {
    background(194,0,0);
    //pan
  stroke(117,116,166);
  fill(179,177,177);
  ellipse(300, 170, 300, 300);

  //Pizza Crust
  fill(255, 212, 128);
  ellipse(xPosition, 170, 285, 285);

  //Cheese
  noStroke();
  fill(255, 241, 43);
  ellipse(xPosition,170,250,250);
    xPosition += xSpeed;
  }
  else{
    
    //pepperoni
    pepperoni(125,390);
    pepperoni(145,390);
    pepperoni(185,390);
    pepperoni(165,390);
    pepperoni(85,390);
    pepperoni(105,390);
    pepperoni(65,390);
    pepperoni(115,380);
    //black Olives
    blackOlive(300,390);
    blackOlive(280,390);
    blackOlive(260,390);
    blackOlive(240,390);
    blackOlive(320,390);
    blackOlive(340,390);
    blackOlive(360,390);
    blackOlive(310,380);
    blackOlive(290,380);
    blackOlive(270,380);
    blackOlive(330,380);
    //moons
    moon(475,390);
    moon(455,390);
    moon(435,390);
    moon(415,390);
    moon(495,390);
    moon(515,390);
    moon(535,390);
    moon(485,380);
    //bowls
    stroke(179,177,177);
    fill(255);
    arc(125, 400, 150, 200, 0, PI);
    arc(300, 400, 150, 200, 0, PI);
    arc(475, 400, 150, 200, 0, PI);

    if(mouseIsPressed == true && mouseX >= 50 && mouseX <=200 && mouseY>=365 && mouseY<= 500){
      toppingType = 1;
    }
    else if(mouseIsPressed == true && mouseX >= 225 && mouseX <=375 && mouseY>=365 && mouseY<= 500){
      toppingType = 2;
    }
    else if(mouseIsPressed == true && mouseX >= 400 && mouseX <=550 && mouseY>=365 && mouseY<= 500){
      toppingType = 3;
    }
    else if(mouseIsPressed == true && mouseX >= 150 && mouseX <=450 && mouseY>=20 && mouseY<=320 && toppingType != 0){
      placeTopping(toppingType,mouseX,mouseY);
    }

  }
  if(keyIsPressed == true){
    xPosition = -144;
  }
}

function moon(x,y){
  
  noStroke();
  fill(225);
  ellipse(x, y, 25, 25);

  //Crater
  noStroke();
  fill(180);
  ellipse(x-6,y-4,4,4);
  ellipse(x+6,y-4,4,4);
  ellipse(x,y+4, 6,6);
}

function pepperoni(x,y) {
stroke(128,0,0);
fill(230,38,0);
ellipse(x,y,25,25);

noStroke();
fill(128,0,0);
ellipse(x-5, y+1, 4, 4);
ellipse(x+3, y-4, 4, 4);
ellipse(x+3, y+5, 4, 4);
}

function blackOlive(x,y){
  strokeWeight(7);
  stroke(0);
  noFill();
  ellipse(x,y,15,15);

  strokeWeight(1);
}

function placeTopping(t,x,y){
  if(t==1){
    pepperoni(x,y);
  }
  else if(t==2){
    blackOlive(x,y);
  }
  else if(t==3){
    moon(x,y);
  }
}