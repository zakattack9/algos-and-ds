// Given an array of integers and an integer k, return the pair that adds up to k, assuming there exists only a unique solution
// Hashmap solution in O(n)
export const findPair = (arr, k) => {
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
// Hashmap solution in O(k) where k is the length of strA + strB - (strA ∩ strB) (all chars of strA and strB without duplicate chars)
export const findAnagram = (strA, strB) => {
  let hashmap = {};
  let numToDelete = 0;

  for (let i = 0; i < strA.length; i++) {
    hashmap[strA.charAt(i)] = ++hashmap[strA.charAt(i)] || 1;
  }

  for (let i = 0; i < strB.length; i++) {
    let numChar = hashmap[strB.charAt(i)];
    hashmap[strB.charAt(i)] = numChar ? --numChar : 1;
  }

  Object.values(hashmap).forEach(numChars => {
    if (Math.abs(numChars)) numToDelete++;
  });

  return numToDelete;
}

// Determine if a given palindrome is valid
// Recursive solution in O(n)
export const isPalindrome = (str) => {
  if (str.length <= 1) return true;

  if (str.charAt(0) !== str.charAt(str.length - 1)) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

// Check if a string has a repeated substring (e.g. "abab" = true, "aba" = false, "abcabc" = false)
// Solution using KMP pattern searching in O(n * m) where n is the length of the string and m is the length of the repeated substring
export const repeatedSubstringPattern = (str) => {
  let dp = [0]
  for (let i = 1; i < str.length; i++) {
    let j = dp[i - 1];
    while (j > 0 && str[i] !== str[j]) {
      j = dp[j - 1];
    }
    if (str[i] === str[j]) {
      j++;
    }
    dp[i] = j;
  }
  const l = dp[str.length - 1];
  return l !== 0 && str.length % (str.length - l) === 0;
};

// Given an array arr, shift the contents of arr to the left d times
// Solution using splice running in O(n)
export const shiftArr = (arr, d) => {
  const shiftAmount = d % arr.length;
  const numToRemove = arr.length - shiftAmount;
  let head = arr.splice(shiftAmount, numToRemove);
  return head.concat(arr);
}
