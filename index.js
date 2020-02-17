// Your code here
class Polygon {
  // array of parameter 
  constructor(sides){
    this.sides = sides 
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter (){
    return this.sides.reduce(function(acc,ele){return acc += ele },0)
  }
}