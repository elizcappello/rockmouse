
var img
  function preload(){
  rockOne = loadImage("assets/rock1.jpg")
  rockTwo = loadImage("assets/rock2.jpg")
}

function setup() {
  createCanvas(1200,700);
  frameRate(60);
  noStroke();
  fill(255);
}

function draw() {
  image(rockOne, 0,0, windowWidth, windowHeight) 

 if(mouseX>width/2) {
  // if mouse is greater than the right half of canvas and its true, based on 0,0 coordinate
  image(rockTwo,0,0,windowWidth, windowHeight) 
  map(img,mouseX,0,400,200,600,mouseY,800,600) 
  
  
  //image(img, mouseY,0,100,100, mouseX,50,200,50) 
  // the first argument is the img variable
  // the next 4 are x, y, width, height of CROP RECTANGLE
  // the final 4 are x, y, width, height of DRAW RECTANGLE
  
  // image(img,cx,cy,cw,ch,dx,dy,dw,dh)
  
 } else {
   map(img,mouseX,0,200,200,400,mouseY,1000,500) 
   
   
   //THERE IS NO CROPPING HAPPENING!
   //Why isnt the else statement (mouseX<width/2)
  
  //image(img,100,100,200,200, mouseX,100,300,200) 
  //if mouse is on left half of canvas

  
  
  //draw circle at mouse location

}
  
   
  
}
  
  
  
  //if ( x > 500 ) {
    //x = 0


