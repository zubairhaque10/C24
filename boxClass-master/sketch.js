const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var log1, log2, log3, log4;
var pig1, pig2;
var bird

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,70,70);
    ground = new Ground(600,380,1200,40)
    box2 = new Box(900,360,70,70)
    pig1 = new Pig(800,360)
    log1 = new Log(800,290,300,PI/2)
    box3 = new Box(700,270,70,70)
    box4 = new Box(900,270,70,70)
    pig2 = new Pig(800,270)
    log2 = new Log(800,200,300,PI/2)
    box5 = new Box(800,180,70,70)
    log3 = new Log(750,180,150,PI/7)
    log4 = new Log(850,180,150,-PI/7)
    bird = new Bird(300,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}