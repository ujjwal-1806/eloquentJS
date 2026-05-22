const reverseArray = (nums) => {
  let res = [];
  for (let i = nums.length - 1; i >= 0; --i) {
    res.push(nums[i]);
  }
  return res;
};

const reverseArrayInPlace = (nums) => {
  let l = 0,
    r = nums.length - 1;
  let temp;
  while (l <= r) {
    temp = nums[l];
    nums[l++] = nums[r];
    nums[r--] = temp;
  }
};
a = [1, 2, 43];
reverseArrayInPlace(a);
console.log(a);
