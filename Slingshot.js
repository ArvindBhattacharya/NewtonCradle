class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200,
            damping: 0
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        Matter.World.add(world, this.sling);
    }
}