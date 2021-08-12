
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperImg, radius=70;

function preload(){
	paperImg=loadImage("paper.png");
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	dustbinObj=new dustbin(1200,650);
	var ball_options={
		isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
	}
	ball=Bodies.circle(300,100,radius/2.6,ball_options);
	World.add(world,ball)
	groundObject=new ground(width/2,670,width,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 

  groundObject.display();
  
  image(paperImg,ball.position.x,ball.position.y,radius,radius);
  dustbinObj.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:180, y:-145})
	}
}

