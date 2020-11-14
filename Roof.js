class Roof{
    constructor(x,y,width,height){

        var options = {

            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.Width = width
        this.Height = height
        World.add(world,this.body);


    }
    display(){
        var  pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x,pos.y,this.Width,this.Height);
        
      }
                                                                                   

    }
