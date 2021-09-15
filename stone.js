class Stone {
    constructor(x,y,width,height,angle){
        this.x=x 
        this.y=y
        this.width=width
        this.height=height
        this.angle=angle
        this.stoneImage=loadImage("stone.png")
    }
    display(){
        push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(this.stoneImage,0,0,this.width,this.height)


        pop();
    }
}