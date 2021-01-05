const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,tree,bg,boy,man;
var star1,star2,star3,star4;
var ball1,ball2,ball3,ball4;
var snow;
var ball01,ball02,ball03,ball04,ball05;
var gift1,gift2,gift3,gift4;
var flakes,flakesGroup;
var sling;
var life = 1;
var items=0;
var mes1="You have 5 lifes.";

function preload()
{
	bg = loadImage("screen.png")
	man = loadImage("man.png")
}

function setup() {
	createCanvas(1400,650);


	engine = Engine.create();
	world = engine.world;

	 ground = new Ground(500,800,800,200);

	 star1 = new Star(1005,80,75,75)
   star1Sling = new SlingShot(star1.body,{x:1005,y:80})

	 snow = new Snow(230,435,35,35)

	 ball1 = new Ball(1000,400,40,40)
	 ball1Sling = new SlingShot(ball1.body,{x:1000,y:400})

	 ball2 = new Ball(1050,300,50,50)
     ball2Sling= new SlingShot(ball2.body,{x:1050,y:300})

	 ball3 = new Ball(1030,450,60,60)
     ball3Sling = new SlingShot(ball3.body,{x:1030,y:450})

	  ball4 = new Ball(950,300,40,40)
      ball4Sling = new SlingShot(ball4.body,{x:950,y:300})

	  ball5 = new Ball(1005,260,70,70)
	  ball5Sling = new SlingShot(ball5.body,{x:1005,y:260}) 

	  star2 = new Star(950,400,30,30)
	  star2Sling = new SlingShot(star2.body,{x:950,y:400}) 

	  star3 = new Star(1025,350,50,50)
	  star3Sling = new SlingShot(star3.body,{x:1025,y:350})  

	  star4 = new Star(900,300,30,30)
	  star4Sling = new SlingShot(star4.body,{x:900,y:300})  

	  star5 = new Star(1000,150,30,30)
	  star5Sling = new SlingShot(star5.body,{x:1000,y:150})  

	  ball01 = new Blueball(870,400,50,50)
	  ball01Sling = new SlingShot(ball01.body,{x:870,y:400})  

	  ball02 = new Blueball(1100,350,30,30)
	  ball02Sling = new SlingShot(ball02.body,{x:1100,y:350})   

	  ball03 = new Blueball(950,100,40,40)
    ball03Sling = new SlingShot(ball03.body,{x:950,y:200})

	  ball04 = new Blueball(1050,175,50,50)
	  ball04Sling = new SlingShot(ball04.body,{x:1050,y:175})

	  ball05 = new Blueball(1100,455,50,50)
	  ball05Sling = new SlingShot(ball05.body,{x:1100,y:455})    
	
	  gift1= new Gift(1000,200,30,30)
	  gift1Sling = new SlingShot(gift1.body,{x:1000,y:200}) 

	  gift2= new Gift(900,455,60,60)
	  gift2Sling = new SlingShot(gift2.body,{x:900,y:455})   

	  gift3= new Gift(950,350,50,50)
	  gift3Sling = new SlingShot(gift3.body,{x:950,y:350})

    sling = new Snowsling(snow.body,{x:230,y:435})
  

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  ground.display();
  background(bg);
    sling.display();
     image(man,1200,300,150,150)
     star1.display();
     ball1.display();
     ball2.display();
     ball3.display();
     ball4.display();
     ball5.display();
     star2.display();
     star3.display();
     star4.display();
     star5.display();
     ball01.display();
     ball02.display();
     ball03.display();
     ball04.display();
     ball05.display();
     gift1.display();
     gift2.display();
     gift3.display();
     snow.display();


  textSize(30);
  fill("Black");
  textFont("full bloom")
     text("🎉🎉ℌ𝔢𝔯𝔢'𝔰 𝔱𝔬 𝔞 𝔟𝔯𝔦𝔤𝔥𝔱 𝔑𝔢𝔴 𝔜𝔢𝔞𝔯 𝔞𝔫𝔡 𝔞 𝔣𝔬𝔫𝔡 𝔣𝔞𝔯𝔢𝔴𝔢𝔩𝔩 𝔱𝔬 𝔱𝔥𝔢 𝔬𝔩𝔡;\n 𝔥𝔢𝔯𝔢'𝔰 𝔱𝔬 𝔱𝔥𝔢 𝔱𝔥𝔦𝔫𝔤𝔰 𝔱𝔥𝔞𝔱 𝔞𝔯𝔢 𝔶𝔢𝔱 𝔱𝔬 𝔠𝔬𝔪𝔢,𝔞𝔫𝔡 𝔱𝔬 𝔱𝔥𝔢 𝔪𝔢𝔪𝔬𝔯𝔦𝔢𝔰\n 𝔱𝔥𝔞𝔱 𝔴𝔢 𝔥𝔬𝔩𝔡.𝔚𝔦𝔰𝔥𝔦𝔫𝔤 𝔶𝔬𝔲 𝔞 𝔥𝔞𝔭𝔭𝔶, 𝔥𝔢𝔞𝔩𝔱𝔥𝔶 𝔑𝔢𝔴 𝔜𝔢𝔞𝔯.\n 𝔐𝔞𝔶 𝔱𝔥𝔢 𝔑𝔢𝔴 𝔜𝔢𝔞𝔯 𝔟𝔩𝔢𝔰𝔰 𝔶𝔬𝔲 𝔴𝔦𝔱𝔥 𝔥𝔢𝔞𝔩𝔱𝔥,\n 𝔴𝔢𝔞𝔩𝔱𝔥, 𝔞𝔫𝔡 𝔥𝔞𝔭𝔭𝔦𝔫𝔢𝔰𝔰.🥳🥳",
     200,50);

     textSize(40);
     fill("Black");
     textFont("Freestyle Script")
     text("t r y s :  "+life,1250,50);

     textSize(40);
     fill("Black");
     textFont("Freestyle Script")
     text("- Mihishkaa Sinha",400,270);

     detectCollision(snow,ball01,ball01Sling)
     detectCollision(snow,ball02,ball02Sling)
     detectCollision(snow,ball03,ball03Sling)
     detectCollision(snow,ball04,ball04Sling)
     detectCollision(snow,ball05,ball05Sling)
     detectCollision(snow,ball1,ball1Sling)
     detectCollision(snow,ball2,ball2Sling)
     detectCollision(snow,ball3,ball3Sling)
     detectCollision(snow,ball4,ball4Sling)
     detectCollision(snow,ball5,ball5Sling)
     detectCollision(snow,gift1,gift1Sling); 
     detectCollision(snow,gift2,gift2Sling);
     detectCollision(snow,gift3,gift3Sling); 
     detectCollision(snow,star1,star1Sling)
     detectCollision(snow,star2,star2Sling)
     detectCollision(snow,star3,star3Sling)
     detectCollision(snow,star4,star4Sling)
     detectCollision(snow,star5,star5Sling)

     if(items===18){
      var Background= new newyear(700,325,1400,650)
      Background.display();
     }

     if(snow.body.position.y<0||snow.body.position.x<0||
      snow.body.position.y>650){      
          life=life+1;
        Matter.Body.setPosition(snow.body,{x:240,y:430})
        sling.attach();
      }
     // console.log(items)
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(snow.body,{x: mouseX, y:mouseY});
}


function mouseReleased(){
    sling.fly();
}	

//  function keyPressed(){
//	if(keyCode === 32){
 //      life=1;
 //      items=1;
//       attached(star1Sling,star1.body);
  //     attached(star2Sling,star2.body);
    //   attached(star3Sling,star3.body);
//       attached( star4Sling,star4.body);
  //     attached( star5Sling,star5.body);
    //   attached(ball1Sling,ball1.body);
//       attached(ball2Sling,ball2.body);
  //     attached( ball3Sling,ball3.body);
    //   attached(ball4Sling,ball4.body);
      // attached(ball5Sling,ball5.body);
       //attached(ball01Sling,ball01.body);
//       attached( ball02Sling,ball02.body);
  //     attached( ball03Sling,ball03.body);
    //   attached(ball04Sling,ball04.body);
     //  attached(ball05Sling,ball05.body);  
  //}
//}

function attached(lsling,lbodyA){
  lsling.bodyA=lbodyA;
}

function  detectCollision(lstone,lmango,lattach) {
  mPos=lmango.body.position;
  sPos=lstone.body.position;

var distance= dist(sPos.x,sPos.y,mPos.x,mPos.y)
      if(distance<=lmango.width+lstone.width){
          lattach.fly();
          items = items+1
          Matter.Composite.remove(world,lmango)
      }
}
