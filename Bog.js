class Bog{
    constructor(x,y,radius){
        var options = {
           
           'restitution':0.5,
          'friction':1,
          'density':1.9
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        World.add(world,this.body)
        this.radius = radius
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}