class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);//16, this.sling1.width * 0.8, this.sling1.height * 0.8);
        image(this.sling2, 170, 20);// this.sling2.width * 0.8, this.sling2.height * 0.8);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(84,39,15);
           
if(pointA.x<220){
    strokeWeight(9);
    line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
image(this.sling3,pointA.x-25,pointA.y-10,15,30)

}
else{
    strokeWeight(4);
    line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
    line(pointA.x+20,pointA.y,pointB.x+30,pointB.y)
image(this.sling3,pointA.x+25,pointA.y-10,15,30)
}
        } 
    }
    
}