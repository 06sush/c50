var boy ,books, backgroundImg, coinImg, capImg;
var grassBack,score=0
var boyImg ,booksImg,coin, cap;

function preload(){
  backgroundImg = loadImage("grass.jpg")
boy = loadAnimation("by.png",'by2.png',"by3.png",'by4.png','by5.png')
coinImg=loadImage('coin.jpg')
capImg=loadImage('caap.jpeg')
books = loadImage('books.jpeg')
mob = loadImage('mobile phn.jpeg')
}


function setup() {
  createCanvas(windowWidth-100 , windowHeight-100);
//createSprite(400, 200, 50, 50);
grassBack = createSprite(0,0,width/2,height)
grassBack.scale=3.5
grassBack.addImage(backgroundImg)

boyImg = createSprite(100,200,50,50)
boyImg.addAnimation("running",boy)
boyImg.scale=0.5
boyImg.debug=true
grassBack.velocityX=-3
coinG = new Group()
booksG =

}

function draw() {
  background(255,255,255);  
 if(grassBack.x<0){
   grassBack.x=grassBack.width/2
 }
  for(var i=0; i<coinG;i++){
      if(coinG.get(i).isTouching(boyImg)){
           coinG.get(i).destroy()
          //score=  score-1
          }
}
  spawnbooks()

  spawncaps()
  spawncoins()
  drawSprites();



}

function spawnbooks() {
  if(frameCount%90===0){
    booksImg = createSprite(width-50,100,10,10)
  booksImg.y=Math.round(random(100,250))
    booksImg.addImage(books)
  booksImg.scale=0.2 
booksImg.velocityX=-3 
booksImg = new Group()

}
 
}

function spawncoins() {
  if(frameCount%50===0){
    coin =  createSprite(width-40,300,15,15)
    coin.scale=0.2
    coin.addImage(coinImg)
  coin.velocityX=-3
 //coin= new Group()
coin.debug = true

 coinG.add(coin)

}
}

function spawncaps() {
if(frameCount%100===0){
  cap = createSprite(width-60,Math.random(150,200),20,20)
  cap.addImage(capImg)
  cap.scale=0.2 
cap.velocityX=-3
//cap = new Group()

}
}

