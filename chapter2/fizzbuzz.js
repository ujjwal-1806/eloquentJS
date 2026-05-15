for (let i = 1; i <= 100; i++) {
  let val = "";
  if (i % 3 == 0) val += "Fizz";
  if (i % 5 == 0) val += "Buzz";
  console.log(val || i); // can't use ?? null coaleacing operator, return right only when left operand is null or undefined.
}
// 0, 'NaN', '' -> false in || operator
console.log(null || 5); // also  false
console.log(undefined || 5); // also false
