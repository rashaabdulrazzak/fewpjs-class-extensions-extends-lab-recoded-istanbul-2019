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
class Triangle  extends Polygon{
  get isValid(){
    let a = this.sides[0]
    if (a < (this.sides[1] + this.sides[2])) return true
    else return false
  }
}
class Square  extends Polygon{
  get isValid (sides){
   return sides.reduce(function(acc,ele){return acc && (ele === sides[0])},true)
  }
  get area (){
    return Math.pow(this.sides[0],2)
  }
}