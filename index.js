// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return Math.PI * (this.radius + this.radius)
    }
    get area(){
        return Math.PI * (this.radius**2)
    }
    set diameter(diameter){
        return this.radius * 2
    }
    set circumference(circumference){
        return Math.PI * (this.radius + this.radius)
    }
    set area(newArea){
        return Math.PI * Math.sqrt(newArea)
    }
}
let circle = new Circle(6)
circle.diameter;
circle.circumference;
circle.area;
