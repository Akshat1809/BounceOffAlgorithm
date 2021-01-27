var fixedRect , movingRect;

function setup() {
  createCanvas(800,400);

  fixed = createSprite(400, 100, 50, 50);
  fixed.shapeColor = 'green';
  fixed.velocityY = 5;

  moving = createSprite(400,300,50,50);
  moving.shapeColor = 'green';
  moving.velocityY = -5;

  fixed.debug = true;
  moving.debug = true;
}

function draw() {
  background(255,255,255);  

  bounceOff(moving , fixed);

  drawSprites();
}

