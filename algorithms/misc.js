// Given an array of integers and an integer k, return the pair that adds up to k, assuming there exists only a unique solution
function findPair(arr, k) {
  let hashmap = {};
  arr.forEach(val => hashmap[val] = ++hashmap[val] || 1);

  for (let i = 0; i < arr.length; i++) {
    const num = k - arr[i];
    if (hashmap[num]) {
      if (num === arr[i] && hashmap[num] < 2) {
        continue;
      }
      return `${arr[i]} ${num}`;
    }
  }
  return 'NO PAIRS';
}

// Given two strings of equal length, find the minimum number of characters that would need to be changed on both such that they can be anagrams of each other
function findAnagram(strA, strB) {
  let hashmap = {};
  let numToDelete = 0;
  
  for(let i = 0; i < strA.length; i++) {
    hashmap[strA.charAt(i)] = ++hashmap[strA.charAt(i)] || 1;
  }
  
  for(let i = 0; i < strB.length; i++) {
    let numChar = hashmap[strB.charAt(i)];
    hashmap[strB.charAt(i)] = numChar ? --numChar : 1;
  }
  
  Object.values(hashmap).forEach(numChars => {
    if (Math.abs(numChars)) numToDelete++;
  });
  
  return numToDelete;
}
