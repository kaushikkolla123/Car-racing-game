var car1_img;
var car2_img;
var track_img;
var car1;
var car2;
var track;
var cityscene;
var cityscene_img;
var invisibleground;
var PLAY;
var END;
var gamstate = PLAY;
var finishline;
var finishline_img;
function preload(){
	car1_img = loadImage("car1.png");
	car2_img = loadImage("car2.png");
	track_img = loadImage("track.png");
	cityscene_img  = loadImage("cityscene.png"); 
	finishline_img = loadImage("finishline.png");
}
function setup() {
  createCanvas(1000,500);
  car1 = createSprite(880,95,80,10);
  car1.addImage("car1",car1_img);
  car1.scale = 0.3;
  car1.velocityX = -2;

  car2 = createSprite(880,345,30,10);
  car2.addImage("car2",car2_img);
  car2.scale = 0.3;
  car2.velocityX = -2;



invisibleground = createSprite(80,345,10,1000);
}

function draw() {
  background(track_img);  
  text("Finish Line",110,110,50,30);
car2.collide(invisibleground);
car1.collide(invisibleground);
if(gamstate === PLAY){
	invisibleground.velocityX = 0;
}
if(keyCode === LEFT_ARROW){
car1.velocityX = -5;
}
if(keyCode === UP_ARROW){
	car1.velocityX = 0;
}
drawSprites();
}


