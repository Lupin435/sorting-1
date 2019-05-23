function split(wholeArray) {
  if (wholeArray.length === 1) {
    return wholeArray;
  }
  const halfLength = Math.ceil(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, halfLength);
  const secondHalf = wholeArray.slice(halfLength, wholeArray.length);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2 = []) {
  const merged = [];

  while (arr1.length || arr2.length) {
    if (arr1[0] < arr2[0] || !arr2.length) {
      merged.push(arr1.shift());
    } else if (arr2[0] < arr1[0] || !arr1.length) {
      merged.push(arr2.shift());
    }
  }

  return merged;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const splitArr = split(array);
    const arr1 = mergeSort(splitArr[0]);
    const arr2 = mergeSort(splitArr[1]);
    const merged = merge(arr1, arr2);
    return merged;
  }
}
