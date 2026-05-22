const range = (start, end, step = start > end ? -1 : 1) => {
  let res = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) res.push(i);
  } else {
    for (let i = start; i >= end; i += step) res.push(i);
  }
  return res;
};

const sum = (arr) => {
  let res = 0;
  for (let n of arr) {
    res += n;
  }
  return res;
};
console.log(range(5, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10, 2)));
