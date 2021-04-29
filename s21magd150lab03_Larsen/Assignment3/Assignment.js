function setup() {
  // put setup code here
  createCanvas(500,500);


}

function draw() {

  mx = mouseX
  my = mouseY



  background(0,204,255);
 ellipseMode(CENTER);
  

   

  //bubbles
  noStroke();
  fill(196,228,255);
  ellipse(40, 40, 30, 30);
  ellipse(float(127.3), 323, 30, 30);
  ellipse(362, float(231.4), 30, 30);
  ellipse(200, 170, 200, 200);

  print("Does the moon blow bubbles when clicked? (They pop right away)");
  print("The Moon will be in every project in some way");
  
  


  //Moon
  moon(mx, my);
  if(mouseIsPressed)
  {
    fill(196,228,255);
    ellipse(mouseX, mouseY, 30, 30);
  }

  //distances
  stroke(0);
  fill(0);
  line(40,40,mx,my);
  let d1 = int(dist(40,40, mx, my));
  push();
  translate((40 + mx) / 2, (40 + my) / 2);
  rotate(atan2(my - 40, mx - 40));
  text(nfc(d1, 1), 0, -5);
  pop();
  line(float(127.3), 323,mx,my);
  let d2 = int(dist(float(127.3), 323, mx, my));
  push();
  translate((float(127.3) + mx) / 2, (323 + my) / 2);
  rotate(atan2(my - 323, mx - float(127.3)));
  text(nfc(d2, 1), 0, -5);
  pop();
  line(362, float(231.4),mx,my);
  let d3 = int(dist(362, float(231.4), mx, my));
  push();
  translate((362 + mx) / 2, (float(231.4) + my) / 2);
  rotate(atan2(my - float(231.4), mx - 362));
  text(nfc(d3, 1), 0, -5);
  pop();
  line(200, 170,mx,my);
  let d4 = int(dist(200, 170, mx, my));
  push();
  translate((200 + mx) / 2, (170 + my) / 2);
  rotate(atan2(170 - 40, mx - 200));
  text(nfc(d4, 1), 0, -5);
  pop();


}

function moon(x,y,px,py){
  
  noStroke();
  fill(225);
  ellipse(x, y, 70, 70);

  //Crater
  noStroke();
  fill(180);
  ellipse(x-10,y-20,8,8);
  ellipse(x+10,y-20,8,8);
  ellipse(x,y, 14,14);
}