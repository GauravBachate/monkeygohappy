var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);

 monkey = createSprite (50,310,10,10)
  monkey.addAnimation ("running", monkey_running); 
   monkey.scale = 0.1;
ground = createSprite (200,350,800,20);
  ground.velocityX = -5; 
  foodGroup = createGroup ();
  obstacleGroup = createGroup ();
  score = 0;
}


function draw() {
 background("black");
  if (ground.x < 0 ){
    ground.x = ground.width/2;
  }
  if (keyDown("space")){
    monkey.velocityY = -7;
  }
  monkey.velocityY = monkey.velocityY +0.5
  monkey.collide(ground);
  if (foodGroup.isTouching(monkey)){
    score = score+2;
    foodGroup.destroyEach ();
  }
 
  monkey.collide (ground);
  if (score === 50 ){
monkey.scale = 0.12;
 }
  if (score === 100){
    monkey.scale = 0.13;
  }
  
  if (obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
    score = 0;
  }
  
  
  
  
  textSize (30);
  text ("score:" + score,50,50);
  food ();
  obstacel ();
drawSprites ();  
}
function food (){
  if (frameCount% 80 == 0 ){
    banana = createSprite (400,200,20,20);
    banana.addImage (bananaImage);
    banana.velocityX = -5;
    banana.scale = 0.09;
    banana.y = random (150,230);
    banana.lifetime = 500;
foodGroup.add (banana);
  }
}

function obstacel (){
  if (frameCount% 300 == 0){
    obstacle = createSprite (400,300,10,10);
    obstacle.addImage (obstacleImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.5
    obstacle.lifetime = 500;
obstacleGroup.add (obstacle);
  }
}




