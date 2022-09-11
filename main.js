function main() {
  let add = addition(5, 20);
  let mul = multiplication(add, 5);
  let div = division(mul, 10);
  console.log(div);
}

main();

function addition(x, y) {
  return x + y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  return x / y;
}
