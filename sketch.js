var tom,tomImg1,tomImg2,tomImg3
var jerry,jerryImg1,jerryImg2,jerryImg3
var garden


function preload() {
    //load the images here

    garden=loadImage("images/garden.png")
    tomImg1=loadImage("images/cat1.png")
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
    tomImg3=loadImage("images/cat4.png")


    jerryImg1=loadImage("images/mouse1.png")
   jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryImg3=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(850,600)
    tom.addAnimation("tomSleeping",tomImg1)
    tom.scale=0.2

    jerry=createSprite(200,600)
    jerry.addAnimation("jerryStanding",jerryImg1)
    jerry.scale=0.2
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){

        tom.velocityX=0
        tom.addAnimation("tomlastimage",tomImg3)

        tom.x=350
        tom.scale=0.2
        tom.changeAnimation("tomlastimage")

        jerry.addAnimation("jerrylastimage",jerryImg3)
        jerry.scale=0.2
        jerry.changeAnimation("jerrylastimage")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode===LEFT_ARROW){
        tom.velocityX=-5
        tom.addAnimation("tomRunning",tomImg2)
        tom.changeAnimation("tomRunning")

        jerry.addAnimation("jerryTeasing",jerryImg2)
        jerry.changeAnimation("jerryTeasing")
      
    }

}
