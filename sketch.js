var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg, leavesimg;
var apple, leaf;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  leavesimg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var num = Math.round(random(1,2))
  if (frameCount%80 == 0){
    if (num == 1){
      createLeaves()
    } else {
      createApples()
    }
  }
  drawSprites();
}

function createApples(){
    apple = createSprite(random(50,340),40,10,10)
    apple.addImage(appleimg)
    apple.scale = 0.05
    apple.velocityY = 6
    apple.depth = rabbit.depth
    rabbit.depth += 1
    if (apple.isTouching(rabbit)){
      lifeend(apple)
    }  
}

function createLeaves(){
  leaf = createSprite(random(50,340),40,5,5)
  leaf.addImage(leavesimg)
  leaf.scale = 0.07
  leaf.velocityY = 6
  leaf.depth = rabbit.depth
  rabbit.depth += 1
  if (leaf.isTouching(rabbit)){
    lifeend(leaf)
  }
  
}
function lifeend(spr) {
  spr.destroy()
}