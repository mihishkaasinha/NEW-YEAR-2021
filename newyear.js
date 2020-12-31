class newyear extends BaseRect {
    constructor(x,y,width,height){
       var options={
           isStatic:true
        }
        super(x,y,width,height)
        this.image=loadImage("PHOTOS/year.png")
    }
}