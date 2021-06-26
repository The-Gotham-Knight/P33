class snow{
    constructor(x,y){
        var options = {
            friction = 0.1,
            density = 0.2,
        }
        this.body = Matter.Bodies.circle(x, y, 10, options)
        this.radius = 10
        this.image = loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,radius,10,10)
        pop()
    }
}