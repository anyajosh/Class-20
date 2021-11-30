var movingrect,fixedrect


function setup() {

  createCanvas(700,700);
  movingrect=createSprite(400,400,80,30)
  movingrect.shapeColor="red"
  fixedrect=createSprite(600,400,50,80)
  fixedrect.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  console.log(movingrect.x-fixedrect.x)
 
  if (movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2
    &&movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2){

    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
  }
  else{
    movingrect.shapeColor="red"
    fixedrect.shapeColor="blue"
  }
  drawSprites();
}