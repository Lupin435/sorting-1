describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2, 1])).toEqual([[2], [1]]);
  });
  it('works on a long array', function() {
    expect(split([1, 3, 4, 10, 12, 14, 17, 18, 19, 20])).toEqual([
      [1, 3, 4, 10, 12],
      [14, 17, 18, 19, 20]
    ]);
  });
  it('works on odd-lengthed arrays', function() {
    expect(split([2, 1, 3])).toEqual([[2, 1], [3]]);
  });
});

describe('Merge function', function() {
  it('returns the array when given a single array', function() {
    expect(merge([1, 2, 3])).toEqual([1, 2, 3]);
  });
  it('merges and sorts two single-element arrays', function() {
    expect(merge([2], [1])).toEqual([1, 2]);
  });
  it('merges and sorts two longer arrays', function() {
    expect(merge([2, 6, 12, 13], [1, 4, 16, 19])).toEqual([
      1,
      2,
      4,
      6,
      12,
      13,
      16,
      19
    ]);
  });
});

describe('mergeSort function', function() {
  it('sorts a long array of elements', function () {
    expect(mergeSort([2, 1, 3, 5, 4, 6, 8, 10, 11, 20, 19, 17, 7, 9, 12, 18, 16, 15, 14, 13])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
})