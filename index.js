function hasTargetSum(array, target) {
  // Create a set to keep track of the numbers we've seen so far
  const seenNumbers = new Set();

  // Iterate through each number in the array
  for (let number of array) {
    // Calculate the complement that would sum up to the target with the current number
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      // If it does, return true since we found two numbers that sum to the target
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If we finish the loop without finding a pair, return false
  return false;
}

/* 
  The Big O time complexity of this function is O(n), where n is the length of the array.
  This is because we iterate through the array once, and each lookup and insertion in the set is O(1).
*/

/* 
  Pseudocode:
  1. Initialize an empty set to keep track of seen numbers.
  2. For each number in the array:
    a. Calculate the complement (target - number).
    b. If the complement is found in the set, return true.
    c. Otherwise, add the current number to the set.
  3. If no pairs are found by the end of the loop, return false.
*/

/*
  Written explanation:
  The function `hasTargetSum` determines if there are two numbers in the array that add up to the target value. 
  It uses a set to keep track of the numbers seen so far. For each number in the array, it calculates the complement 
  (the value that, when added to the current number, equals the target). If the complement is already in the set, 
  it means we have found two numbers that sum to the target, so we return true. If the complement is not in the set, 
  we add the current number to the set and continue. If we finish iterating through the array without finding a pair, 
  we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
