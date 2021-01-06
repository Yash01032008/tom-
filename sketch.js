var background2 , background3, tom , tom2


function preload() {
    //load the images here
   background2= loadImage("garden.png")
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(100,100,20,20)
    //tom.addImage("t",tom2)
    background3=createSprite(0,0,600,600)
    background3.addImage("b",background2)
}

function draw() {

    background('pink');
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
