
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	groundObj = new ground(width/2,570,width,20)
	leftSide = new ground(1100,500,20,120);
	rightSide = new ground(1300,500,20,120);

	var ball_options = {
		isStatic:false,
		restitution:0.2,
		friction:0,
		density:1.2,
	}
	

	//Create the Bodies Here.
	ball = Bodies.circle(500,350,40,ball_options);
	World.add(world,ball);
	//console.log(ball);

	
  
}


function draw() {
  background(0);
  Engine.update(engine);
  fill("white")
  ellipse(ball.position.x,ball.position.y,40,40);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
if(keyDown("UP_ARROW") ){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:9,y:-11})	
}
}


