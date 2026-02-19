/*
Problem 2: Remove Element
    Problem Statement: Given an integer array nums and an integer 
    val, remove all occurrences of val in nums in-place. The order 
    of the elements may be changed. Return the number of elements in nums 
    which are not equal to val.

Theory: 
    Same-direction two pointers: write = 0 (next position to write), 
    scan with i. If nums[i] !== val, copy to nums[write] and 
    increment write. This keeps relative order; if order didn’t 
    matter we could swap with the end.

Dry Run: 
    nums = [3,2,2,3], val = 3.
    - i=0: 3 === val, skip.
    - i=1: 2 !== val, nums[0]=2, write=1.
    - i=2: 2 !== val, nums[1]=2, write=2.
    - i=3: 3 === val, skip.
    Return write = 2. First two elements [2,2]. ✓
*/

/**
 * Remove all occurrences of val in-place. Return new length k; first k elements valid.
 *
 * Approach: Use two pointers - one to read, one to write.
 * Only write elements that are not equal to val.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function removeElement(nums, val) {
  let write = 0;  // Position to write next valid element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[write] = nums[i];
      write++;
    }
  }

  return write;  // New length
}