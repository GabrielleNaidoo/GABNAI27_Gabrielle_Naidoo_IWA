const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below

const [, first = 1] = data.lists[0] || {};
const [, second = 1] = data.lists[1] || {};
const [, third = 1] = data.lists[2] || {};
// console.log(first);

const result = [];

const extractBiggest = () => {
  if (
    (first[first.length - 1] > second[second.length - 1] &&
      first[first.length - 1] > third[third.length - 1]) ||
    (third.length < 1 && first[first.length - 1] > second[second.length - 1]) ||
    (second.length < 1 && first[first.length - 1] > third[third.length - 1]) ||
    (third.length < 0 && second.length < 0)
  ) {
    return first.pop();
  }

  if (
    (second[second.length - 1] > first[first.length - 1] &&
      second[second.length - 1] > third[third.length - 1]) ||
    (third.length < 1 && second[second.length - 1]) > first[first.length - 1] ||
    (first.length < 1 && second[second.length - 1] > third[third.length - 1]) ||
    (third.length < 1 && first.length < 1)
  ) {
    return second.pop();
  }

  if (
    (third[third.length - 1] > first[first.length - 1] &&
      third[third.length - 1] > second[second.length - 1]) ||
    (second.length < 1 && third[third.length - 1] > first[first.length - 1]) ||
    (first.length < 1 && third[third.length - 1] > second[second.length - 1]) ||
    (second.length < 1 && first.length < 1)
  ) {
    return third.pop();
  }
};
//Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);

/*Changes made:
-remove object destructuring operator and replaced it with array destructuring operator
-put comma before each destructure variable so that the first element in outer array is skipped
-Fixed syntax for the array that is being destructure. Changed from data.first/second/third to data.lists with associated iteration([0],[1],[2]) 
-Add conditions for:
 -current> other 2
 -firstOther.length<1 and current>secondOther
 -secondOther.length<1 and current>firstOther
 -firstOther.length<1 and secondOther.length<1 (Both empty arrays)
- Make the selected element return whenever the function is called
- use the pop method to remove it from the array*/
