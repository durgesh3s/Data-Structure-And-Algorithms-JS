/*
Problem 1: Merge Sorted Array:
    Problem Statement: You are given two integer arrays nums1 and nums2, 
    sorted in non-decreasing order, and two integers m and n, representing 
    the number of elements in nums1 and nums2 respectively. Merge nums2 into 
    nums1 in-place. nums1 has length m + n 
    (first m elements valid, rest zeros).

Theory: 
    If we merge from the end of nums1, we never overwrite
    unprocessed elements. So use three pointers: 
    i = m-1, j = n-1, k = m+n-1. 
    Compare nums1[i] and nums2[j], 
    put the larger at nums1[k], 
    and decrement k and the pointer we used. 
    If j >= 0 after the main loop, 
    copy remaining from nums2 
    (because those are smallest and belong at the start).

Dry Run:
    `nums1 = [1,2,3,0,0,0]`, m=3, `nums2 = [2,5,6]`, n=3.
    - i=2, j=2, k=5: compare 3 and 6 → write 6 at k=5; k=4, j=1.
    - i=2, j=1, k=4: compare 3 and 5 → write 5; k=3, j=0.
    - i=2, j=0, k=3: compare 3 and 2 → write 3; k=2, i=1.
    - i=1, j=0, k=2: compare 2 and 2 → write 2; k=1, j=0 (or i=1).
    - i=0, j=0, k=1: compare 1 and 2 → write 2; k=0, j=0.
    - i=0, j=-1: copy rest of nums2? j<0, so no. Remaining: nums1[0] still 1. So result [1,2,2,3,5,6]. ✓
*/

/**
 * Merge nums2 into nums1 in-place. nums1 has length m + n; first m elements
 * are valid, rest are zeros. Both arrays are non-decreasing.
 *
 * Approach: Merge from the end to avoid overwriting unprocessed elements.
 * Use three pointers: i (last valid in nums1), j (last in nums2), k (write position).
 *
 * Time Complexity: O(m + n) - single pass through both arrays
 * Space Complexity: O(1) - only using a few variables
 */

function merge(nums1, m, nums2, n) {
  let i = m - 1;      // last valid index in nums1
  let j = n - 1;      // last index in nums2
  let k = m + n - 1;  // write position from the end

  // Merge while both arrays have elements
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If j >= 0, we still have elements in nums2 that are smaller than everything left in nums1
  // Copy them to the beginning of nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
  // If i >= 0, nums1's remaining elements are already in the right place (start of array)
}