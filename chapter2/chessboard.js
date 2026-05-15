let size = 8;
let res = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2) res += "#";
    else res += " ";
  }
  res += "\n";
}
console.log(res);
