const countBs = (str) => {
  return countChar(str, "B");
};
const countChar = (str, char) => {
  let count = 0;
  for (let ch of str) {
    // can use for (let i = 0; i < str.length; i++)
    if (ch === char) count++; //  lef x in obj [for objects iteration]
  }
  return count;
};
console.log(countBs("BOB"));
console.log(countChar("kakkerlak", "k"));
