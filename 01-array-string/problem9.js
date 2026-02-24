/* 
Problem 9: Jump Game
    Problem Statement: You are given an integer array `nums`. You are 
    initially positioned at the array’s first index, and each element 
    in the array represents your maximum jump length at that position. 
    Return `true` if you can reach the last index, or `false` otherwise.

Theory: 
    Greedy approach: Track the farthest index we can reach. For each 
    position, if we can reach it (i <= farthest), update 
    farthest = max(farthest, i + nums[i]). If farthest >= n-1, return true. 
    If we can’t reach current position (i > farthest), return false.

Dry Run: nums = [2,3,1,1,4].
    - i=0: farthest=0, can reach? yes, farthest=max(0,0+2)=2.
    - i=1: farthest=2, can reach? yes, farthest=max(2,1+3)=4 >= 4, return true. ✓
*/
/**
 * Check if we can reach the last index by jumping.
 *
 * Approach: Greedy - track farthest reachable index
 * For each position, if reachable, update farthest.
 * If we can't reach current position, return false.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 * 
 * “Main jitna door ab tak pahunch sakta hoon (farthest), 
 * bas usko update karta chalunga.”
 */
function canJump(nums) {
  let farthest = 0;  // Farthest index we can reach

  for (let i = 0; i < nums.length; i++) {
    // If we can't reach current position, return false
    if (i > farthest) {
      return false;
    }

    // Update farthest reachable index
    farthest = Math.max(farthest, i + nums[i]);

    // If we can reach the last index, return true
    if (farthest >= nums.length - 1) {
      return true;
    }
  }

  return farthest >= nums.length - 1;
}