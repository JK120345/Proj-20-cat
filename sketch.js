var catImg,mosImg;
var carA,Ma,catp,mp,gr;
var tom,jerry;
var btoa;
var  gameState="play";
//var  gameState=END;
function preload() {
    //load the images here
    catImg=loadImage("images/cat1.png");
    carA=loadAnimation("images/cat3.png","images/cat2.png");
    catp=loadImage("images/cat4.png");
    m1=loadAnimation("images/mouse1.png");
    Ma=loadAnimation("images/mouse2.png","images/mouse3.png");
    mp=loadAnimation("images/mouse4.png");

    gr=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1600,900);

    
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("sit",catImg);
    tom.scale = 0.2;

    jerry=createSprite(50,700);
    jerry.addAnimation("ST",m1);
    jerry.scale = 0.15;

   

}

function draw() {

    background(gr);
    //btoa=createSprite(1000,800);
    //btoa.addImage(gr);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", catp);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mp);
        jerry.scale=0.15; 
        jerry.changeAnimation("jerryLastImage");
        
    }

   
    //Write condition here to evalute if tom and jerry collide
    
    drawSprites();

    stroke("black");
    textSize(30);
    text("press left arrow to make tom move",350,100);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", carA);
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryTeasing", Ma); 
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
     }

}