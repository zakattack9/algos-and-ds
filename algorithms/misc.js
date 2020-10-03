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

// Given an array check if at any index i, the sum of numbers to the left of i is equal to the sum of numbers to the right of i where i is exclusive of both left and right sum calculations; return 1 if there exists such index, else return 0
// e.g. given [1, 2, 3, 9, 4, 2] at index 3 the left sum of numbers is 6 (1 + 2 + 3) and the right sum of numbers is also 6 (4 + 2)
// e.g. input: [1, 2, 3, 0, 4, 2] => output: 1; input: [1, 3, 4, 3] => output: 0
export const isBalanced = (arr) => { // GoDaddy
  let rightSum = 0;
  let leftSum = 0;
  arr.forEach(num => rightSum += num);
  rightSum -= arr[0];

  for (let i = 1; i < arr.length; i++) {
    rightSum -= arr[i];
    leftSum += arr[i - 1];
    if (rightSum === leftSum) return 1;
  }
  return 0;
}

// Given an array of strings, for each string compare all suffixes (including the original string) with the original string and return a count for the number of equal characters both the suffix and the original string have have in order. See examples.
// e.g. ["ababaa"] => "ababaa" (6), "babaa" (0), "abaa" (3), "baa" (0), "aa" (1), "a" (1) => 6 + 0 + 3 + 0 + 1 + 1 = 11
// where 6, 0, 3, 0, 1, 1 are the number of equal characters that both the original string ("ababaa") and the current suffix string ("ababaa", "babaa", ...) have in order.
// furthermore, "ababaa" and "abaa" results in 3 because both strings start with the common substring of "aba" which is of length 3
// additionally, "ababaa" and "babaa" results in 0 because neither string starts with a common substring thus the common substring is of length 0
// e.g. ["aa"] => "aa" (2), "a" (1) => 2 + 1 = 3
// e.g. input: ["ababaa", "aa"] => output: [11, 3]
export const findEqualChars = (arr) => { // GoDaddy
  let returnArr = [];
  arr.forEach(str => {
    let count = 0;
    for (let suffixStr = str; suffixStr.length > 0; suffixStr = suffixStr.slice(1)) {
      for (let i = 0; i < suffixStr.length; i++) {
        if (suffixStr.charAt(i) === str.charAt(i)) {
          count++;
        } else {
          break;
        }
      }
    }
    returnArr.push(count);
  });
  return returnArr;
}
