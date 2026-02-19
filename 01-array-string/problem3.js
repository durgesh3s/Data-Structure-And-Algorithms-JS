/*
Problem 3: Remove Duplicates from Sorted Array
    Given an integer array nums sorted in non-decreasing order, 
    remove the duplicates in-place such that each unique element 
    appears only once. The relative order of the elements should be
    kept the same. Return k after placing the final result in the first 
    k slots of nums.

Theory:
    Since array is sorted, duplicates are adjacent. Use two pointers: 
    write for next position to write unique element, i to scan. 
    If nums[i] !== nums[write-1] (or nums[i] !== nums[write] 
    if write points to last written), write nums[i] and increment write.

Dry Run:
    nums = [1,1,2].
    - i=0: write=0, nums[0]=1 → write nums[0] at write=0, write=1.
    - i=1: nums[1]=1, nums[write-1]=nums[0]=1, same → skip.
    - i=2: nums[2]=2, nums[write-1]=nums[0]=1, different → write nums[2] at write=1, write=2.
    Return 2. First two elements [1,2]. ✓
*/

/**
 * Remove duplicates from sorted array in-place. Return new length k.
 *
 * Approach: Since array is sorted, duplicates are adjacent.
 * Use two pointers: write position and scan pointer.
 * Only write when current element differs from last written element.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let write = 1;  // Position to write next unique element (first element is always unique)

  for (let i = 1; i < nums.length; i++) {
    // If current element is different from last written element, write it
    if (nums[i] !== nums[write - 1]) {
      nums[write] = nums[i];
      write++;
    }
  }

  return write;  // New length
}