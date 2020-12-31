class Flakes{
    constructor(x,y,width,height){
var options={
    isStatic:false
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.image=loadImage("PHOTOS/snowflakes.png")
this.width=width
this.height=height
World.add(world,this.body)
}

display(){
    var angle = this.body.angle;
    push();
    //translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}

}