function longestCommonPrefix(strs) {
  let commonPrefix = "";
  if (!strs) return "";
  for (let i = 0; i < strs[0].length; i++) {
    for (const str of strs) {
      if (str[i] !== strs[0][i]) return commonPrefix;
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
}

// Tests
console.log(
  longestCommonPrefix(["flower", "flow", "flight"]),
  "→ Expected: 'fl'"
);
console.log(longestCommonPrefix(["dog", "racecar", "car"]), "→ Expected: ''");
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"]),
  "→ Expected: 'inters'"
);
console.log(longestCommonPrefix(["throne", "throne"]), "→ Expected: 'throne'");
console.log(longestCommonPrefix([""]), "→ Expected: ''");
console.log(longestCommonPrefix(["a"]), "→ Expected: 'a'");
