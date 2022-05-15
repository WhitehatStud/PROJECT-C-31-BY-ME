
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[];
var divisionsHeight=300;
var particles=[];
var plinkos=[];
;

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,690,800,20);

    for(var i=0;i<=width;i=i+80){
      divisions.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight))
    }
    for(var j=40;j<=width;j=j+50){
      plinkos.push(new Plinko(j,75));
    }
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    }



}

function draw(){
  rectMode(CENTER);
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    drawSprites();
    for(var n=0;n<=divisions.length;n++){
      divisions[n].display();
    }
    if(frameCount %60 === 0){
      particles.push(new Particle(random(width/2-30,width/2+30),10,10))
    }
    for(var h=0;h<=particles.length;h++){
      particles[h].display();
    }
    ground.display();
  
    
}
