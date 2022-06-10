const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var cima, baixo, direita, esquerda;
var bola
var botaoCima
var botaoDireita


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  cima = new Parede(200, 10, 400, 20);
  baixo = new Parede(200, 390, 400, 20);
  direita = new Parede(390, 200, 20, 400);
  esquerda = new Parede(10, 200, 20, 400);
  
  var bolaconfig = {
    restitution:0.5,
  }
  bola = Bodies.circle(200,100,20,bolaconfig);
  World.add(world,bola);
  botaoCima = createImg("up.png");
  botaoCima.position(220,30);
  botaoCima.size(50,50);
  botaoCima.mouseClicked(gravidadeS);

  botaoDireita = createImg("right.png");
  botaoDireita.position(20,30);
  botaoDireita.size(50,50);
  botaoDireita.mouseClicked(gravidadeD);
}
function draw() 
{
  background(51);
  Engine.update(engine);
  cima.exibir();
  baixo.exibir();
  direita.exibir();
  esquerda.exibir();

  ellipse(bola.position.x,bola.position.y,20);
}

function gravidadeD(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0.05,y:0});
}

function gravidadeS(){
  Matter.Body.applyForce(bola,{x:0,y:0},{x:0,y:-0.05});
}