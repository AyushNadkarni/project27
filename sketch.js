
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(150 ,200,30,30)
	bobObject2 = new Bob(155 ,200,30,30)
	bobObject3 = new Bob(160 ,200,30,30)
	bobObject4 = new Bob(165 ,200,30,30)
	bobObject5 = new Bob(170 ,200,30,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  display()
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}



