function hasDuplicateChars(str) {
    const charSet = new Set();
    for (let char of str) {
      if (charSet.has(char)) {
        return false; // duplicate found
      }
      charSet.add(char);
    }
    return true; // no duplicates
  }
  
  console.log(hasDuplicateChars("hello")); // true (l is duplicate)
  console.log(hasDuplicateChars("world")); // false
  

// console.log(checkIfPangram("leetcode"))
// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
