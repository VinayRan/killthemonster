class Fly{
    constructor(bodyA, pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1.2,
            length: 250
        }
        // VERY VERY VERY IMPORTANT
        this.rope=Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);
    
    }
    display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    push();
    strokeWeight(0);
    stroke("teal");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    pop();   
    }
    }