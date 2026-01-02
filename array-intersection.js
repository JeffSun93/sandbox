function intersect(nums1, nums2) {
  // Your code here
  if (nums1.length === 0 || nums2.length === 0) return [];
  if (nums1.length > nums2.length) {
    const nums3 = nums1;
    nums1 = nums2;
    nums2 = nums3;
  }
  nums1 = nums1.sort();
  nums2 = nums2.sort();
  //console.log(nums1, nums2);
  const intersectionNums = [];
  for (const num of nums1) {
    if (nums2.includes(num)) {
      intersectionNums.push(num);
      nums2 = nums2.slice(nums2.indexOf(num) + 1);
    }
  }
  return intersectionNums;
}

// Create tests for these cases:
// Basic intersection with duplicates
// [1, 2, 2, 1], [2, 2] → [2, 2]
console.log(intersect([1, 2, 2, 1], [2, 2]), "->[2, 2]");
// Multiple common elements
// [4, 9, 5], [9, 4, 9, 8, 4] → [4, 9] (or [9, 4])
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]), "->[4, 9]");
// Different frequencies
// [1, 1, 1], [1, 1] → [1, 1]
console.log(intersect([1, 1, 1], [1, 1]), "->[1, 1]");
// No intersection
// [1, 2, 3], [4, 5, 6] → []
console.log(intersect([1, 2, 3], [4, 5, 6]), "->[ ]");
// Complete overlap
// [1, 2, 3], [1, 2, 3] → [1, 2, 3]
console.log(intersect([1, 2, 3], [1, 2, 3]), "->[1, 2, 3]");
// Single element arrays
// [5], [5] → [5]
console.log(intersect([5], [5]), "->[5]");
// One array is subset
// [1, 2], [1, 2, 2, 3, 4] → [1, 2]
console.log(intersect([1, 2], [1, 2, 2, 3, 4]), "->[1, 2]");
