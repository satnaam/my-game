var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  redcoinimg=loadImage("107-1079968_red-coin-mario-64-red-coin.png")
  bluecoinimg=loadImage("BlueCoin.png")
  car1=loadImage("inline_image_preview.jpg")
  jeep5=loadImage("depositphotos_75718309-stock-illustration-jeep-offroad-icon.jpg")
  jeep1=loadImage("jeep-car-vehicle-transport-camping-adventure-K7Y75F.jpg")
  jeep2=loadImage("jeep-silhouette-in-front_gg98486627.jpg")
  jeep3=loadImage("kisspng-jeep-cherokee-xj-car-jeep-wrangler-jk-jeep-wrang-jeep-decal-5b335d67c29136.933397131530092903797.jpg")
  jeep4=loadImage("motor-vehicle-cartoon-vehicle-clip-art-mode-of-transport-png-favpng-9fmyH3kLk9Nfp05kXaC8H5WXt.jpg")
  car2=loadImage("oT3DY.png")
  
}

function setup(){
  
  createCanvas(1300,800);
  
// Moving background
path=createSprite(750,400);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(650,400,30,30);
boy.addAnimation("JakeRunning",boyImg);
  
// create left Boundary
leftBoundary=createSprite(530,400,100,1500);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(980,400,100,1500);
rightBoundary.visible = false;

bluegroup=new Group();
redgroup=new Group ();
cargroup=new Group ();
jeepgroup=new Group ();
}

function draw() {
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  //boy.x = World.mouseX;
  
  if(keyDown("RIGHT_ARROW")){
    boy.x=boy.x+6
    
  }
  if(keyDown("LEFT_ARROW")){
    boy.x=boy.x-6
  }
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 600){
    path.y = height/2;
  }
  spawnbluecoin()
  spawnredcoin()
  spawncar()
  drawSprites();

}

function spawnredcoin(){
if (frameCount%210===0){
  var rcoin=createSprite(random(600,900),-10);
  rcoin.addImage("redcoin",redcoinimg);
  rcoin.velocityY=2
  rcoin.scale=0.05
  rcoin.lifetime=300

}
}
function spawnbluecoin(){
  if (frameCount%1000===0){
    var bcoin=createSprite(random(600,900),-10);
bcoin.addImage("bluecoin",bluecoinimg);
bcoin.velocityY=4
bcoin.scale=0.08
bcoin.lifetime=300
  }
}
function spawncar(){
  if(frameCount%500===0){
    var car=createSprite(random(600,900),-10);
    car.velocityY=3;
    var rand=Math.round(random(1,2));
    switch(rand){
      case 1:car.addImage(car1);
      break;
      case 2:car.addImage(car2);
      break;
    default:break
    }
    car.lifetime=300;
    car.scale=0.1
  }
}