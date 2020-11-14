
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var bog1,bog2,bog3,bog4,bog5,roof,chain1,chain2,chain3,chain4,chain5;
function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	roof = new Roof(600,200,300,20);


var bogStartingX= 600
var bogStartingY= 200
var bogDiameter=40

	bog1 = new Bog(bogStartingX-bogDiameter*2,bogStartingY+500,bogDiameter)
	bog2 = new Bog(bogStartingX-bogDiameter,bogStartingY+500,bogDiameter)
	bog3 = new Bog(bogStartingX,bogStartingY+500,bogDiameter)
	bog4 = new Bog(bogStartingX+bogDiameter,bogStartingY+500,bogDiameter)
	bog5 = new Bog(bogStartingX+bogDiameter*2,bogStartingY+500,bogDiameter)

	
	chain1 = new chain(bog1.body,roof.body,-80,0)
	chain2 = new chain(bog2.body,roof.body,-40,0)
	chain3 = new chain(bog3.body,roof.body,0,0)
	chain4 = new chain(bog4.body,roof.body,+40,0)
	chain5 = new chain(bog5.body,roof.body,+80,0)
	
   

	Engine.run(engine);
  
}


function draw() {
	background(255);
 
  bog1.display();
  bog2.display();
  bog3.display();
  bog4.display();
  bog5.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();

  roof.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Body.applyForce(bog1.body,bog1.body.position,{x:-80,y:-80})
	  
	 }
   }

