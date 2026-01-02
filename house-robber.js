function rob(nums) {
  // Your code here
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  return Math.max(rob(nums.slice(1)), rob(nums.slice(2)) + nums[0]);
}

// Tests
console.log(rob([1, 2, 3, 1]), "→ Expected: 4");
console.log(rob([2, 7, 9, 3, 1]), "→ Expected: 12");
console.log(rob([5, 1, 1, 5]), "→ Expected: 10");
console.log(rob([2, 1, 1, 2]), "→ Expected: 4");
console.log(rob([1]), "→ Expected: 1");
console.log(rob([2, 3]), "→ Expected: 3");
