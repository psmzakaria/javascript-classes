class SimpleCalculator {
  constructor(value) {
    this.value = value;
  }
  add(n) {
    this.value = this.value + n;
    return this
  }

  subtract(n) {
    this.value = this.value - n;
    return this
  }
  multiply(n) {
    this.value = this.value * n;
    return this
  }

  divide(n) {
    this.value = this.value / n;
    return this
  }
}

const calc5 = new SimpleCalculator(5);
console.log(calc5.add(15).subtract(10).multiply(20));
console.log(calc5.value)
