// describe('Bubble Sort', function() {
//   beforeAll(function() {
//     spyOn(window, 'swap').and.callThrough();
//   });

//   beforeEach(function() {
//     window.swap.calls.reset();
//   });

//   it('handles an empty array', function() {
//     expect(bubbleSort([])).toEqual([]);
//   });
//   it('handles one element array', function() {
//     expect(bubbleSort([1])).toEqual([1]);
//   });
//   it('sorts an array', function() {
//     expect(bubbleSort([1, 4, 2, 3])).toEqual([1, 2, 3, 4]);
//   });
//   it('sorts an array several times', function() {
//     expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
//     expect(window.swap.calls.count()).toEqual(6);
//   });
// });
