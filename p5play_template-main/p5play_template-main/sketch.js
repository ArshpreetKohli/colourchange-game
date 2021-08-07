
function setup() {
  createCanvas(400,400);
  background('white')
}

function draw() 
{
  
  
  
  if(keyIsDown(UP_ARROW))
  {
    background('red')

  }
if(keyIsDown(DOWN_ARROW))
{
  background('yellow')
  
}
if(keyIsDown(RIGHT_ARROW))
{
  background('green')
}
if(keyIsDown(LEFT_ARROW))
{
  background('blue')
}
drawSprites()
}




