export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

export const getMaxItem = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
