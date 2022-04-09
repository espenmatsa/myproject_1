const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg,bgImg;
var brick, drone;
var ground;


let engine;
let world;


function preload(){
  
  brickImg = loadImage("assets/brick_1.png");

  bgImg = loadImage("assets/background_2.gif");

  droneImg = loadImage("assets/drone.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 825, 2600, 30);
  ground2 = new Ground(20, 10, 30, 2600);

  //creating the brick sprite
  brick = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  brick.addImage(brickImg)
  brick.scale = 0.5

  //creating the drone sprite
  drone = createSprite(110, 90, 50, 50);
  drone.addImage(droneImg);
  drone.scale = 0.5;
  drone.velocityX = -10;
}

function draw() {
  Engine.update(engine);
  background(bgImg);
  ground.show();
  drawSprites();
}

