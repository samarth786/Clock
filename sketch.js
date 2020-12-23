var hr, mn, sc, scAngle, hrAngle , mnAngle, co, bc ;


function preload(){
  co = loadImage("bg.jpg");
}
function setup() {
  createCanvas(800,600);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);

hrAngle = map(hr, 0, 60, 0, 360);

mnAngle = map(mn, 0, 60, 0, 360);


}

function draw() {
  background(co);  

  angleMode(DEGREES);
  noFill();
  strokeWeight(20)
  ellipse(400, 300, 500, 500);
  stroke("white");
  strokeWeight(1000)
  ellipseMode(CENTER);
ellipse(400, 300, 500, 500);

  translate(400,300); 
  
  push();  
  rotate(scAngle);
stroke(255, 0, 0);
strokeWeight(7);
line(0 ,0 ,200 , 0);
pop();
  
push();  
rotate(mnAngle);
stroke(0, 250, 0);
strokeWeight(7);
line(0 ,0 ,150 , 0);
pop();

  push();  
rotate(hrAngle);
  stroke(255, 212, 0);
  strokeWeight(7);
  line(0 ,0 ,100 , 0);
  pop();
 
  drawSprites();
  strokeWeight(1);
 
textSize(12*5);
fill("black");
  
  text("1", 85, -160);
  text("2",155,  -85); 
  text("3",195,  15);
  text("4",155,  125);
  text("5", 80, 200);
  text("6", -20, 220);
  text("7", -115, 205);
  text("8",-195,  125);
  text("9",-225,  20);
  text("10",-210,  -85); 
  text("11", -135, -160);
  text("12", -35, -190);
}
