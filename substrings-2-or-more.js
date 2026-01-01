function substringTest(str1, str2) {
  for(let i = 0; i < str1.length -1; i++){
    const testTwoChar = str1.slice(i, i+2);
    const regex = new RegExp(`${testTwoChar}`, 'i');
    if(regex.test(str2)) return true;
  }
  return false;
}

// Tests
console.log(substringTest("Something", "Fun"), "→ Expected: false");
console.log(substringTest("Something", "Home"), "→ Expected: true");
console.log(substringTest("HELLO", "bell"), "→ Expected: true");
console.log(substringTest("test", "llama"), "→ Expected: false");
console.log(substringTest("Apple", "Lemmings"), "→ Expected: true");
