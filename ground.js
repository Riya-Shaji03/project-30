class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'density':3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("brown")
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };