var rect1, rect2, rect3;
var car1, car2, car3, wall1, wall2, wall3;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed = random(5,9);
  weight = random(400,700);

  rect1 = createSprite(750,40,15,35);
  rect2 = createSprite(750,140,15,35);
  rect3 = createSprite(750,240,15,35);
  
  car1 = createSprite(40,40,30,15);
  car1.shapeColor = "blue";
  car1.velocityX = speed;
  car2 = createSprite(40,140,30,15);
  car2.shapeColor = "blue";
  car2.velocityX = speed;
  car3 = createSprite(40,240,30,15);
  car3.shapeColor = "blue";
  car3.velocityX = speed;
  
  wall1 = createSprite(400,90,800,3);
  wall1.shapeColor = "white"; 
  wall2 = createSprite(400,190,800,3);
  wall2.shapeColor = "white";
  wall3 = createSprite(400,290,800,3);
  wall3.shapeColor = "white";
}

function draw() {
  background("black");  

  if(rect1.x - car1.x < (car1.width + rect1.width)/2 && 
     rect2.x - car2.x < (car2.width + rect2.width)/2 &&
     rect3.x - car3.x < (car3.width + rect3.width)/2 ) {
   car1.velocityX = 0;
   car2.velocityX = 0;
   car3.velocityX = 0;
   var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
     car1.shapeColor = "red";
     car2.shapeColor = "red";
     car3.shapeColor = "red";
    }
      if(deformation < 180 && deformation > 100){
        car1.shapeColor = "yellow";
        car2.shapeColor = "yellow";
        car3.shapeColor = "yellow";
      }
        if(deformation < 100){
          car1.shapeColor = "green";
          car2.shapeColor = "green";
          car3.shapeColor = "green";
        }
  
  }



  drawSprites();
}