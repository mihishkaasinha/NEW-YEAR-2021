class Tree extends BaseRect{
    constructor(width,height){
        super(1000,300,width,height);
        this.image=loadImage("Tree.png")
        this.image.scale=5;
    }
    display(){
        super.display();
    }
}
