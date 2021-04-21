//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife;
var knifeImage ;
var fruit,fruit1,fruit2,fruit3,fruit4,bomb,bomba,gameover,gameovera
var gameoversound

var fruitGroup,enemyGroup;
function preload(){
  
  knifeImage = loadImage("knife.png");
  fruit1=loadImage("fruit1.png")
   fruit2=loadImage("fruit2.png")
   fruit3=loadImage("fruit3.png")
   fruit4=loadImage("fruit4.png")
  bomba=loadAnimation("alien1.png","alien2.png")
  gameovera=loadImage("gameover.png")
  gameoversound=loadSound("gameover.mp3")
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  score=0;
  //create fruit and monster Group variable here
  fruitGroup=new Group();
  enemyGroup=new Group();
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //calling fruit and monster function
    fruits();
    // Move knife with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if knife touching fruit
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach()
    score=score+2
  } 
    // Go to end state if knife touching enemy
      else{
        if(enemyGroup.isTouching(knife)){
          gameState=END
          fruitGroup.destroyEach()
          enemyGroup.destroyEach()
          fruitGroup.setVelocityXEach(0)
          enemyGroup.setVelocityXEach(0)
        }
      }
  }
  
  drawSprites();
  
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}
function fruits(){
  if(World.frameCount%80===0){
fruit=createSprite(400,200,20,20)
  fruit.scale=0.2;
    
    var r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    }
    if(r==2){
      fruit.addImage(fruit2);
    }
        if(r==3){
      fruit.addImage(fruit3);
    }
        if(r==4){
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,350));
    
    fruit.velocityX=-7;
    fruit.setLifetime=100
    fruitGroup.add(fruit)
    
  
  }
}
function enemy(){
  if(World.frameCount%80==0){
    bomb=createSprite(400,200,20,20);
    bomb.addAnimation("moving",bomba)
    bomb.y=Math.round(random(100,550));
    bomb.velocity
  }
}