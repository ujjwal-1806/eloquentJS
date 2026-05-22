// const arrayToList = (arr) => {
//   let list = {};
//   curr = list;
//   for (let i = 0; i < arr.length; i++) {
//     curr.value = arr[i];
//     if (i != arr.length - 1) {
//       curr.rest = {};
//       curr = curr.rest;
//     } else curr.rest = null;
//   }
//   return list;
// };

// official sol, nice idea
const arrayToList = (arr) => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
};

const listToArray = (list) => {
  let res = [];
  for (; list != null; list = list.rest) {
    res.push(list.value);
  }
  return res;
};

const prepend = (element, list) => {
  let res = { value: element, rest: list };
  return res;
};

// const nth = (list, num) => {
//   let i = 0;
//   while (list) {
//     if (i++ == num) return list.value;
//     list = list.rest;
//   }
//   return undefined;
// };

const nth = (list, num) => {
  if (!list) return undefined;
  if (num == 0) return list.value;
  else return nth(list.rest, n - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
