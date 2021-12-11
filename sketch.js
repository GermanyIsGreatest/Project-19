function preload(){
seaImg = loadImage("sea.gif")
ShipImg = loadImage("Ship.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 
 Ship = createSprite(windowWidth-300,700,50,50)
Ship.addImage(ShipImg)
}

function draw() {
 background(seaImg)
 drawSprites()
}