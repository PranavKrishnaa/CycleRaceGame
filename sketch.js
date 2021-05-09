var BG, BG_Img;
var cat, catIMG;
var mouse;

var gameState = "PLAY" ;
function preload() {
  backImg = loadImage("garden.png")
  catImg1= loadAnimation("cat1.png");
  catImg2=loadAnimation("cat2.png","cat3.png");
  catImg3= loadAnimation("cat4.png");
  mouseImg1=loadAnimation("mouse1.png");
  mouseImg2= loadAnimation("mouse2.png","mouse3.png");
  mouseImg3=loadAnimation("mouse4.png");

}
function setup() {
  createCanvas(800,600);
  //To create background 
  BG = createSprite(400,250, 50, 50);
  BG.addImage(backImg);
  BG.scale = 1;

  //To create cat sprite
  cat = createSprite(600,500,1,1);
  cat.addAnimation("catRunning", catImg1);
  cat.scale = 0.2;

  //To create mouse and adds the image to it
  mouse = createSprite(200,500,10,10);
  mouse.addAnimation("mouseRunning", mouseImg1);
  mouse.scale = 0.15;
}
 
function draw() {
  background(0);
  drawSprites();
 
  if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        //To stop the cat's velocity
        cat.velocityX= 0;
        //To change the animation
        cat.addAnimation("tomLastImage", catImg3);
        cat.x = 300;
        //To scale the cat image
        cat.scale= 0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        //To scale the mouse image
        mouse.scale= 0.15;
        mouse.changeAnimation("jerryLastImage");
    }  
}

function keyPressed(){

  if(keyCode === LEFT_ARROW){
      //cat moves left and changes animation
      cat.velocityX = -5;
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("something");
      //mouse changes it's animation
      mouse.addAnimation("mouseSomething", mouseImg2);
      mouse.changeAnimation("something2");
  }
}

