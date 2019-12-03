function fuel(mass) {
  total = 0
  mass = f(mass)
  while (mass > 0) {
    total += mass
    mass = f(mass)
  }
  return total
}

total = y.split('\n').map((item) => fuel(+item)).reduce((a, b) => a + b, 0)
console.log("2", total)
