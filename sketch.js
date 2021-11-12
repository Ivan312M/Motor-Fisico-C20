
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var rock;
var wall;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_option = {
    restitution: 0.95, 
    frictionAir: 0.01
  }

  var ground_option = {
    isStatic: true
  };
  
  var rock_option = {
    restitution: 0.85
  };
  
  var wall_option = {
    isStatic: true
  };

  ball = Bodies.circle(100, 10, 20, ball_option);
  World.add(world, ball);
  
  ground = Bodies.rectangle(200, 390, 400, 20, ground_option);
  World.add(world, ground);

  rock = Bodies.circle(300, 20, 10, rock_option);
  World.add(world, rock);

  wall = Bodies.rectangle(300, 200, 100, 20, wall_option);
  World.add(world, wall);
}

function draw() 
{
  background(51);
  
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20);
  ellipse(rock.position.x, rock.position.y, 10);
  rect(wall.position.x, wall.position.y, 100, 20);
}

