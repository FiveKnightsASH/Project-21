const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide, rightSide;

let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2, height-10, width, 20);
	leftSide = new Ground(width-200, height-70, 20, 120);
	rightSide = new Ground(width-50, height-70, 20, 120);


var ball_options={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	Density: 1.2,
}

	//Create the Bodies Here.
	ball = Bodies.circle(50,20,15, ball_options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 15, 15);

  drawSprites();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x: 0.025, y: -0.03});
}
}
