class Block{
    constructor(x,y){
       var options={
         isStatic:true,
         friction:30.0,
         restitution:0.01,
         density:1.0
       }
       this.body=Bodies.rectangle(x,y,20,40,options)
       this.width = 20;
       this.height = 40;
       World.add(world, this.body);
       this.Visibility=255;
    }
    display(){
      console.log(this.body.speed);
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      fill(random(0,255),random(0,255),random(0,255));
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      }
}