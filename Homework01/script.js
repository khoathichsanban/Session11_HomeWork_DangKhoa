let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = arr[0];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log("Max: " + max);
console.log("Min: " + min);
