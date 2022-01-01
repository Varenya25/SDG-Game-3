var background, backgroundImage;
var MagicalBook, MagicalBookImage;
var Slappy,SlappyImage ;
var Snowman, SnowmanImage;
var Werewolf, WerewolfImage;
var Dwarf, DwarfImage;
var SlappyGrp, SnowmanGrp, WerewolfGrp, DwarfGrp;
var obstacle, obstacleGrp;

function preload(){
  //load backgroundImage here
  backgroundImage = loadImage("Images/BGImage2.png");
  //load MagicalBookImage here
  MagicalBookImage = loadImage("Images/magicalBook.png");
  //load SlappyImage here
  SlappyImage = loadImage("Images/slappyobj1.png");
  //load SnowmanImage here
  SnowmanImage = loadImage("Images/snowmanobj3.png");
  //load WerewolfImage here
  WerewolfImage = loadImage("Images/werewolfobj2.png");
  //load DwarfImage here
  DwarfImage = loadImage("Images/dwarfobj4.png");
}


function setup(){
  //create canvas
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  console.log(windowHeight);

  //create background
  background = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  background.shapeColor = "lightBlue";
  background.addImage(backgroundImage);
  background.scale = 1.5;
 
  //create MagicalBook
  MagicalBook = createSprite(windowWidth-1150, windowHeight-70, 20, 60);
  MagicalBook.shapeColor = "yellow";
  MagicalBook.addImage(MagicalBookImage);
  MagicalBook.scale = 0.5;

//create Obstacle Groups
obstacleGrp = createGroup();
SlappyGrp = createGroup();
SnowmanGrp = createGroup();
WerewolfGrp = createGroup();
DwarfGrp = createGroup();

invisibleGround = createSprite(windowWidth/2,windowHeight-10,windowWidth,10);
invisibleGround.visible = false;
}
 

  
function draw(){
 
  //calling the functions
    /*spawnObj1();
    spawnObj2();
    spawnObj3();
    spawnObj4();*/
    spawnObj();

    //jump when the space key is pressed
    if(keyDown("space")&& MagicalBook.y >= windowHeight-150) {
      MagicalBook.velocityY = -12;
      //jumpSound.play();
    }
    //add gravity
    MagicalBook.velocityY = MagicalBook.velocityY + 0.8;

    //stop MagicalBook from falling down
    MagicalBook.collide(invisibleGround);

   drawSprites();
}

function spawnObj1(){
  if (frameCount%60 == 0){
    Slappy = createSprite(random(300,900),random(100,1000));
    Slappy.addImage(SlappyImage);
    Slappy.velocityX = -4;
    Slappy.scale = 0.3;
  
  //add each magicalBook to the group
  SlappyGrp.add(Slappy);
  }

}
function spawnObj(){
  if (frameCount%80 == 0){
    obstacle = createSprite(windowWidth, windowHeight-70, 20,20);
    obstacle.velocityX = -4;
    obstacleGrp.add(obstacle);
    //generate random obstacles
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(SlappyImage);
              break;
      case 2: obstacle.addImage(SnowmanImage);
              break;
      case 3: obstacle.addImage(WerewolfImage);
              break;
      case 4: obstacle.addImage(DwarfImage);
              break;
      default: break;
      }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
  }
}

function spawnObj2(){
  if (frameCount%60 == 0){
    Snowman = createSprite(random(300,900),random(100,1000));
    Snowman.addImage(SnowmanImage);
    Snowman.velocityX = -4;
    Snowman.scale = 0.1;
  
  //add each magicalPen to the group
  SnowmanGrp.add(Snowman);
  }

}

function spawnObj3(){
  if (frameCount%60 == 0){
    Werewolf = createSprite(random(300,900),random(100,1000));
    Werewolf.addImage(WerewolfImage);
    Werewolf.velocityX = -4;
    Werewolf.scale = 0.1;
  
  //add each magicalPage to the group
  WerewolfGrp.add(Werewolf);
  }

}

function spawnObj4(){
  if (frameCount%60 == 0){
    Dwarf = createSprite(random(300,900),random(100,1000));
    Dwarf.addImage(DwarfImage);
    Dwarf.velocityX = -4;
    Dwarf.scale = 0.1;
  
  //add each magicalPage to the group
  DwarfGrp.add(Dwarf);
  }

}