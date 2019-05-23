function swap(current, next) {
  return [next, current];
}

function bubbleSort(array) {
  if (array.length < 2) {
    return array;
  }
  let hasChanged = true;
  while (hasChanged === true) {
    hasChanged = false;
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i];
      const next = array[i + 1];
      if (current > next) {
        [array[i], array[i + 1]] = swap(current, next);
        hasChanged = true;
      }
    }
  }
  return array;
}
