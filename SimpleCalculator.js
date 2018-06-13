class SimpleCalculator {
  constructor(value) {
    this.value = value;
  }
  getAdd(n) {
    this.value = this.value + n;
    return this;
  }

  getSubtract(n) {
    this.value = this.value - n;
    return this;
  }
  getMultiply(n) {
    this.value = this.value * n;
    return this;
  }

  getDivide(n) {
    this.value = this.value / n;
    return this;
  }
}

const calc5 = new SimpleCalculator(5);
console.log(
  calc5
    .getAdd(15)
    .getSubtract(10)
    .getMultiply(20)
);
console.log(calc5.value);
