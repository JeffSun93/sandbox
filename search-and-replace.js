function searchReplace(str, before, after) {
  const reg = new RegExp(before);
  const indexOfBefore = str.match(reg).index;
  console.log(indexOfBefore, before, after);
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else if (before[0] === before[0].toLowerCase()) {
    after = after[0].toLowerCase() + after.slice(1);
  }
  console.log(indexOfBefore, before, after);
  return (
    str.slice(0, indexOfBefore) +
    after +
    str.slice(indexOfBefore + before.length)
  );
}

// Tests
console.log(
  searchReplace("Let's go to the store", "store", "shop"),
  "→ Expected: 'Let's go to the Shop'"
);
console.log(
  searchReplace("He is Sleeping on the sofa", "Sleeping", "sitting"),
  "→ Expected: 'He is Sitting on the sofa'"
);
console.log(
  searchReplace("I think we should look up there", "up", "Down"),
  "→ Expected: 'I think we should look down there'"
);
console.log(
  searchReplace("This has a spellngi error", "spellngi", "spelling"),
  "→ Expected: 'This has a spelling error'"
);
console.log(
  searchReplace("His name is Tom", "Tom", "john"),
  "→ Expected: 'His name is John'"
);
