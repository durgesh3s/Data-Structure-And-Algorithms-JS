/*
Problem 6: Rotate Array
    Problem Statement: Given an integer array `nums`, rotate the array to 
    the right by `k` steps, where `k` is non-negative.

Theory:
    Three approaches:
    1. **Reverse approach**: Reverse entire array, then reverse first k elements, then reverse remaining n-k elements.
    2. **Cyclic replacement**: Move elements in cycles (each element goes to (i+k) % n).
    3. **Extra array**: Copy to new array with shifted indices.

Dry Run (Reverse approach):
  nums = [1,2,3,4,5,6,7], k=3.
- Reverse all: [7,6,5,4,3,2,1].
- Reverse first k=3: [5,6,7,4,3,2,1].
- Reverse remaining n-k=4: [5,6,7,1,2,3,4]. ✓
*/

/**
 * Rotate array to the right by k steps.
 *
 * Approach: Reverse approach
 * 1. Reverse entire array
 * 2. Reverse first k elements
 * 3. Reverse remaining n-k elements
 *
 * Time Complexity: O(n) - three passes through array
 * Space Complexity: O(1) - only using a few variables
 */
function rotate(nums, k) {
  const n = nums.length;
  k = k % n;  // Handle k > n case

  // Helper function to reverse array from start to end
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  // Step 1: Reverse entire array
  reverse(nums, 0, n - 1);

  // Step 2: Reverse first k elements
  reverse(nums, 0, k - 1);

  // Step 3: Reverse remaining n-k elements
  reverse(nums, k, n - 1);
}