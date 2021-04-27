var gameState = "start";


function preload(){
  bgimage1 = loadImage("7.jpg");
  bgimage2 = loadImage("1.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  
  avatar1 = createSprite(width/2-200,height/2-300,100,100);
  avatar1.shapeColor = "red";
  avatar1.visible = false;

  avatar2 = createSprite(width/2+200,height/2-300,100,100);
  avatar2.shapeColor = "blue";
  avatar2.visible=false;
  
}

function draw(){
 if(gameState === "start"){
  background(bgimage1);

  textSize(30);
  fill("black")
  text("Once upon a time there is a kingdom named Mayan where a evil guy Sam Tailor comes to visit them and  ",width/2-700,height/2-300)
  text("promises to make Mayan a better place.He betrayes them and stole the sacred stone of Mayan and drops it ",width/2-700,height/2-250)
  text("in the ocean as he was attacked by stone. Being a player, you found the stone while fishing next to the river ",width/2-700,height/2-200)
  text("and got to know about the Mayan kingdom, and you have to place the stone in the Mayan kingdom.",width/2-700,height/2-150)
  text("Sam Tailor will create obstacles to you to achieve your mission.",width/2-700,height/2-100)
  //textAlign(left)
  text("                                                You get only 4 lives to achieve this. ",width/2-700,height/2-50)
  text("                                              Help the people in Mayan Kingdom!!!!",width/2-700,height/2)
  text("                                                       They are waiting for you!!",width/2-700,height/2+100)
 
  textSize(40)
  text("         Press SPACE BAR to START the GAME!",width/2-500,height/2+200)
 }
 if(keyDown("space")){
    background(bgimage2);
    gameState = "play";
    avatar1.visible=true;
    avatar2.visible=true;
    
    if(mouseIsOver(avatar1)){
      console.log("avatar 1 is pressed")
      avatar2.visible=false;
   
    }
    if(mouseIsOver(avatar2)){
     avatar1.destroy();
     
   }
 }


 drawSprites();

}
 
 