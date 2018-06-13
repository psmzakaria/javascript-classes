class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    const calc3 = Math.PI * this.radius * this.radius;
    return calc3;
  }

  getPerimeter() {
    const calc4 = 2 * Math.PI * this.radius;
    return calc4;
  }
}

const circle1 = new Circle(1);
console.log(circle1.getArea(), circle1.getPerimeter());
