function uniteUnique(...arrays) {
  //console.log(arrays[0])
  const unitedArr = []
  for(const array of arrays){
    for(const char of array){
      if(!unitedArr.includes(char)){
        unitedArr.push(char);
      }
    }
  }
  return unitedArr;
}

// Tests
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), "→ Expected: [1, 3, 2, 5, 4]");
console.log(uniteUnique([1, 2, 3], [5, 2, 1]), "→ Expected: [1, 2, 3, 5]");
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), "→ Expected: [1, 2, 3, 5, 4, 6, 7, 8]");
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]), "→ Expected: [1, 3, 2, 5, 4, 6]");
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]), "→ Expected: [1, 3, 2, 5, 4]")
