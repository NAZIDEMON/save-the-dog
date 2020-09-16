var guard,guardImage;
var girl,girlImage;
var dog,dogImage;
var grass,grassImg;
var sound;
var tree,rock,mushroom,getout,gaddha,turtle;
var treeImg,rockImg,mushroomImg,getoutImg,gaddhaImg,turtleImg;

function preload() {

guardImage = loadImage("imagess/guard2.png");
girlImage = loadImage("imagess/girl2.png");
dogImage = loadImage("imagess/doggo.png");
grassImg = loadImage("imagess/grass.png");

treeImg = loadImage("imagess/tree.png");
rockImg = loadImage("imagess/rock.png");
mushroomImg = loadImage("imagess/mushroom.png");
getoutImg = loadImage("imagess/getout.png");
gaddhaImg = loadImage("imagess/gaddha.png")
turtleImg = loadImage("imagess/turtle.png")

}

function setup() {
createCanvas(1200,900);
grass = createSprite(600,450,displayWidth*4,displayHeight*4);
grass.addImage("grass",grassImg)
grass.x = grass.width/2
grass.scale = 8;
grass.velocityX = -3;

guard = createSprite(90,490,20,20);
guard.addImage("guard",guardImage);
guard.scale = 0.5;

girl = createSprite(400,490,15,15);
girl.addImage("girl",girlImage);
girl.scale = 2;

dog = createSprite(400,420,10,10);
dog.addImage("dog",dogImage);
dog.scale = 2;


tree = createSprite(100,240,14,14);
    tree.addImage("tree",treeImg);
    tree.velocityX = 2;

    rock = createSprite(50,200,18,18);
    rock.addImage("rock",rockImg);
    rock.velocityX = 2;
    
    mushroom = createSprite(550,170,18,18);
    mushroom.addImage("mushroom",mushroomImg);
    mushroom.velocityX = 2;
    
    getout = createSprite(240,100,18,18);
    getout.addImage("getout",getoutImg);
    getout.velocityX = 2;

    gaddha = createSprite(300,600,18,18);
    gaddha.addImage("gaddha",gaddhaImg);
    gaddha.velocityX = 2;

    turtle = createSprite(340,900,18,18);
    turtle.addImage("turtle",turtleImg);
    turtle.velocityX = 2;
    
//obstacles();

}

function draw() {
  background("green")
  if (keyDown(RIGHT_ARROW)) {
    girl.velocityX = 3;
    sound.play();
  }
  if (keyWentUp(RIGHT_ARROW)) {
    girl.velocityX = 0;
  }
  if (keyDown(UP_ARROW)) {
    girl.velocityY = -3;
    sound.play();
  }
  if (keyWentUp(UP_ARROW)) {
    girl.velocityY = 0;
  }
  if (keyDown(DOWN_ARROW)) {
    girl.velocityY = 3;
    sound.play();
  }
  if (keyWentUp(DOWN_ARROW)) {
    girl.velocityY = 0;
  }
  if (frameCount%80 === 0) {
    //obstacles();
    
  }
  if (grass.x<0) {
 grass.x = grass.width/2
  }

  dog.x = girl.x;
  dog.y = girl.y-100;
  guard.x = girl.x-200;
  guard.y = girl.y;
  drawSprites();

  
}