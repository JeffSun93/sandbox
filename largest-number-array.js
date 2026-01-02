function largestNumber(nums) {
  // Your code here
  const sortedNums = nums.map(String).sort((a, b) => {
    if (a + b < b + a) {
      return 1;
    } else if (a + b > b + a) {
      return -1;
    } else {
      return 0;
    }
  });
  if (sortedNums[0] === "0") {
    return "0";
  }
  return sortedNums.join("");
}

// Create tests for these cases (you can choose to make your own):
// Clear ordering
// [4, 5, 8] → "854"
console.log(largestNumber([4, 5, 8]), "→ Expected: '854'");

// Numbers with same starting digit
// [3, 30, 34] → "34330"
console.log(largestNumber([3, 30, 34]), "→ Expected: '34330'");

// Similar numbers with different optimal arrangement
// [4, 46, 7] → "7464"
console.log(largestNumber([4, 46, 7]), "→ Expected: '7464'");

// Multiple mixed nubmers
// [5, 60, 299, 56] → "60565299"
console.log(largestNumber([5, 60, 299, 56]), "→ Expected: '60565299'");

// Longer array
// [5, 2, 1, 9, 50, 56] → "95655021"
console.log(largestNumber([5, 2, 1, 9, 50, 56]), "→ Expected: '95655021'");
// Edge case: all zeros
// [0, 0, 0] → "0"
console.log(largestNumber([0, 0, 0]), "→ Expected: '0'");

// Edge case: single number
// [42] → "42"
console.log(largestNumber([42]), "→ Expected: '42'");
