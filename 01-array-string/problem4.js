/*
Problem 4: Remove Duplicates from Sorted Array II
    Problem Statement: Given an integer array nums sorted in non-decreasing 
    order, remove some duplicates in-place such that each unique element 
    appears at most twice. The relative order should be kept the same. Return
    k after placing the final result in the first k slots of nums.

Theory: 
    Similar to Problem 3, but allow at most 2 occurrences. Check 
    if nums[i] !== nums[write-2] (or nums[i] !== nums[write-1] if 
    we’ve written less than 2). This ensures we don’t write more than 2 of 
    the same element.

Dry Run: 
    nums = [1,1,1,2,2,3].
    - i=0: write=0, write nums[0]=1, write=1.
    - i=1: write=1, nums[1]=1, nums[write-1]=nums[0]=1, same but write-1=0 < 2, so write nums[1], write=2.
    - i=2: nums[2]=1, nums[write-2]=nums[0]=1, same and already 2 written → skip.
    - i=3: nums[3]=2, nums[write-2]=nums[1]=1, different → write nums[3], write=3.
    - i=4: nums[4]=2, nums[write-2]=nums[2]=1, different → write nums[4], write=4.
    - i=5: nums[5]=3, nums[write-2]=nums[3]=2, different → write nums[5], write=5.
    Return 5. First 5 elements [1,1,2,2,3]. ✓
*/

/**
 * Remove duplicates from sorted array, allowing at most 2 occurrences of each element.
 * Return new length k.
 *
 * Approach: Use two pointers. Check if current element differs from element
 * at write-2 position. This ensures we never write more than 2 of the same element.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function removeDuplicatesII(nums) {
  if (nums.length <= 2) return nums.length;

  let write = 2;  // Start writing from index 2 (first two elements can stay)

  for (let i = 2; i < nums.length; i++) {
    // If current element differs from element at write-2, we can write it
    // This ensures at most 2 occurrences of each element
    if (nums[i] !== nums[write - 2]) {
      nums[write] = nums[i];
      write++;
    }
  }

  return write;  // New length
}