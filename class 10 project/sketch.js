var seaImage,sea;
var ship,shipImage;

function preload(){
  seaImage = loadImage("sea.png");
  shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage("sea",seaImage);
  sea.velocityX = -3;
  ship = createSprite(200,300);
  ship.addAnimation("ship",shipImage);
  ship.scale = 0.2;
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = 200;
  }





  drawSprites();
}
