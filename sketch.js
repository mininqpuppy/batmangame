var Umbrella, umbrellaImage;
var Thunder,thunderImage

function preload(){
umbrellaImage=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");
thunderImage=loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
}

function setup(){
createCanvas(1700,1000)   
    Thunder=createSprite(900,200,5,5)
    Thunder.addAnimation("thunder",thunderImage);
    Thunder.scale=0.7

    Umbrella=createSprite(800,600,10,10)
    Umbrella.addAnimation("umbrella",umbrellaImage);
    Umbrella.scale=0.7

}

function draw(){
    background("black");
    drawSprites();
}   

