class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    const calc3 = 3.14 * this.radius * this.radius;
    return calc3;
  }

  perimeter() {
  const calc4 = 2 * 3.14 * this.radius;
    return calc4;
  }
}

const circle1 = new Circle(1);
console.log(circle1.area(),circle1.perimeter());
