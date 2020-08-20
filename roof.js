class {

    constructor(x,y){

 var options= {
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:2.0
 
 }


 this.body = Bodies.rectangle(400,400,width/2, 650, width, 10 , {isStatic:true,restitution:1.0} );
World.add(world, ground);


 World.add(world,this.body);

 

}

display(){
 
  rectMode(CENTER);
  
  rect(400,400,60,60)
}


}


