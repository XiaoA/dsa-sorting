function selectionSort(array) {
  const swap = (array, index1, index2) =>
    ([array[index1], array[index2]] = [array[index2], array[index1]]);

  for (let i = 0; i < array.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(array, i, lowest);
  }

  return array;
}

module.exports = selectionSort;
