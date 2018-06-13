class Rectangle {
  constructor(breadth, length) {
    this.breadth = breadth;
    this.length = length;
  }
  getArea() {
    const calc1 = this.length * this.breadth;
    return calc1;
  }
  getPerimeter() {
    const calc2 = 2 * this.length + 2 * this.breadth;
    return calc2;
  }
}

const rect1 = new Rectangle(2, 4);
console.log(rect1.getArea());
