const arr = [1, 2, 5, 6, 11, 3, 5, 8, 10];

const calSum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(calSum);
