const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxdrop = 100;
var man;
var umbrella;

var score = 0;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400), random(0,400)));
}
    man = new Man(700,320,70,70);
    umbrella = new Umbrella(920,320,70,70);
 
}

function draw(){
    
    Engine.update(engine);
    //strokeWeight(4);
    man.display();
    umbrella.display();
    thunder.display();
    
}
