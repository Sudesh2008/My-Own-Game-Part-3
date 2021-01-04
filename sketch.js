var batman, batmanImage;
var bg;
var bat, batImage, batGroup;
var joker, jokerImage;
var batarang, batarangImage, batarangGroup;
var bullet, bulletImage, bulletGroup;
var win, winImage;
var lose, loseImage;

function preload(){
  
  batmanImage = loadAnimation("b1.png","b2.png","b3.png","b4.png");
  bg = loadImage("Bg.png");
  
  batImage = loadAnimation("bat1.png","bat2.png","bat3.png","bat4.png");
  jokerImage = loadAnimation("j1.png","j2.png","j3.png");
  
  batarangImage = loadImage("batarang.png");
  bulletImage = loadImage("bullet.png");

  winImage = loadImage("you win.gif");
  loseImage = loadImage("you lose.jpg");
}

function setup() {
  createCanvas(800,400);
  batman = createSprite(250,350,30,30);
  batman.addAnimation("batman",batmanImage);
  
  joker = createSprite(600,350,30,30);
  joker.addAnimation("joker",jokerImage);
  joker.scale = 1.5;

  batarangGroup = new Group();
  bulletGroup = new Group();
  batGroup = new Group();
}

function draw() {
  background(bg);  

  if(keyDown("right")){
    batman.x = batman.x + 5;
  }

  if(keyDown("left")){
    batman.x = batman.x -5;
  }

  spawnBats();
  spawnBullets();

  if(keyDown("space")){
    spawnBatarangs();
  }

  if(batarangGroup.isTouching(joker)){

  }


  drawSprites();
}


function spawnBats() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    bat = createSprite(800,120,40,10);
    bat.y = Math.round(random(80,120));
    bat.addAnimation("Bat",batImage);
    bat.scale = 0.5;
    bat.velocityX = -3;
    
    //assign lifetime to the variable
    bat.lifetime = 350;
    batGroup.add(bat);
  }
}

function spawnBatarangs() {
  //write code here to spawn the clouds
    batarang = createSprite(batman.x,batman.y,40,10);
    batarang.addImage("batarang",batarangImage);
    batarang.scale = 0.05;
    batarang.velocityX = 3;
    batarang.rotationSpeed = 10;
    
    //assign lifetime to the variable
    batarang.lifetime = 350;
    batarangGroup.add(batarang);
}

function spawnBullets() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    bullet = createSprite(joker.x - 30,joker.y - 30,20,10);
    bullet.addImage("Bullet",bulletImage);
    bullet.scale = 0.07;
    bullet.velocityX = -3;
    
    //assign lifetime to the variable
    bullet.lifetime = 350;
    bulletGroup.add(bullet);

  }
}

