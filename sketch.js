var backgroundImage
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine, world
function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow1 = new snow(100,100)
  
}

function preload() {
  backgroundImage = loadImage("snow2.jpg")
}

function draw() {
  Engine.update(engine)
  bakcground(backgroundImage)
  snow1.display() 
  drawSprites();
}