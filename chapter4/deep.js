const deepEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;
  let keyA = Object.keys(a),
    keyB = Object.keys(b);
  if (keyA.length != keyB.length) return false;
  for (let key of keyA) {
    if (!keyB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
a = [1, 2, 3];
console.log(a == [1, 2, 3]);
// -> false
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
