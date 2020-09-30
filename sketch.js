
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,box1,box2,box3,paper;
var dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20);
	paper = new Paper(100,690);
	box1 = new Dustbin(600,680,160,20);
	box2 = new Dustbin(520,570,20,200);
	box3= new Dustbin(680,570,20,200);

	Engine.run(engine);
  
}
function draw() {
  Engine.update(engine);
  background(255);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
  imageMode(CENTER);
  image(dustbinImg,600,565,195,250);
  
  drawSprites();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-210});
	}
}



