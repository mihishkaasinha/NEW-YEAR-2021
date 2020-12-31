class SlingShot{
  constructor(bodyA, pointB){
      var options={
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.4,
          length: 10
      }
      
      this.pointB = pointB
      this.sling = Constraint.create(options);
      World.add(world, this.sling);

  }

  fly(){
      this.sling.bodyA = null;
  }

  attach(){
    this.sling.bodyA=snow.body;
}


  display(){
      if(this.sling.bodyA){
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(2);
          stroke(43, 19, 7);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
      
     // image(this.sling2,170,20)

  }
  
}