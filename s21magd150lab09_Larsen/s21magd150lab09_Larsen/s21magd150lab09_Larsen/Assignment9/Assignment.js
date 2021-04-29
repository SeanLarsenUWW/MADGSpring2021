var video1;
var video2;
var video3;
var video4;
var song;
var songSpeed;

function preload(){
  song = loadSound('/assests/sounds/backgroundMusic.mp3');
  songSpeed=0.01;
}

function setup() {
  // put setup code here
  createCanvas(860, 570);
  background(1);
  playing = false;
  video1 = createVideo(["/assests/videos/cars.mp4"]);
  video2 = createVideo(["/assests/videos/cars.mp4"]);
  video3 = createVideo(["/assests/videos/cars.mp4"]);
  video4 = createVideo(["/assests/videos/cars.mp4"]);
  preload(video1);
  preload(video2);
  preload(video3);
  preload(video4);
  video1.hide();
  video2.hide();
  video3.hide();
  video4.hide();
  
  //This creates the html elements.
  carText = createElement('h1', 'These are some cars in the city');
  carText2 = createElement('h1', 'Please click twice to start mirror videos');
  carText.position(100,550);
  carText2.position(100,600);
  
  
  
}

function draw() {
  //This creates the mirror pattern seen with the videos
  push();
  scale(-1, 1);
  image(video1, -430, 0, 430, 270);
  pop();

  push();
  scale(-1, -1);
  image(video2, -430, -541, 430, 270);
  pop();

  push();
  scale(1, 1);
  image(video2, 431, 0, 430, 270);
  pop();

  push();
  scale(1, -1);
  image(video2, 431, -541, 430, 270);
  pop();

}

function mouseClicked() {
  if (playing == true){

    //This plays the videos
    playing = false;
    video1.loop();
    video2.loop();
    video3.loop();
    video4.loop();

    //This plays the music
    song.loop();
    while(songSpeed<1){
      song.rate(songSpeed);
      songSpeed+=0.0002;
      print(songSpeed);
    }
  }
  else{
    playing = true;

    //This stops the videos
    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();

    //This stops the music
    song.pause();
    songSpeed = 0.01;
  }
}
