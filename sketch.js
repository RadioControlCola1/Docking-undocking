var iss;
var astronaut;
var background,bg;
var sleeping,sleep;
var gymming,gym;
var eating,eat;
var bathing,bath;
var moving,move;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage("background",bg);
  iss.scale = 0.2;

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("brushing",brush);
  astronaut.addAnimation("gymming",gym);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("bathing",bath);
  astronaut.addAnimation("moving",move);
  astronaut.scale = 0.1;
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;


}

function draw() {
  background(255,255,255);  
  


  if(keyDown("UP_ARROW")){
    astronaut.changeAnimation("brushing",brush);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("gymming",gym);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("eating",eat);
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
   
    
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("bathing",bath);
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
    
  }

  if(keyDown("M")){
    astronaut.changeAnimation("moving",move);
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;

    }

    
edges = createEdgeSprites()
astronaut.bounceOff(edges);

  drawSprites();

  
}