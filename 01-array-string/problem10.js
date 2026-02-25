/*
Problem 10: Jump Game II
    Problem Statement: You are given a 0-indexed array of integers `nums` 
    of length `n`. You are initially positioned at `nums[0]`. Each 
    element `nums[i]` represents the maximum length of a forward jump from 
    index `i`. Return the minimum number of jumps to reach `nums[n - 1]`.

Theory: 
    Greedy BFS approach: Track current jump’s farthest reach and next 
    jump’s farthest reach. When we reach current jump’s end, increment jumps 
    and set current = next. This ensures we always jump from the position 
    that gives maximum reach.

Dry Run: nums = [2,3,1,1,4].
    - i=0: currentEnd=0, farthest=0, jumps=0. i=0 <= currentEnd, farthest=max(0,0+2)=2.
    - i=1: currentEnd=0, farthest=2. i=1 > currentEnd? no. farthest=max(2,1+3)=4.
    - i=2: currentEnd=0, farthest=4. i=2 > currentEnd? yes, jumps=1, currentEnd=2. farthest=max(4,2+1)=4.
    - i=3: currentEnd=2, farthest=4. i=3 > currentEnd? yes, jumps=2, currentEnd=4 >= 4, return 2. ✓
*/
/**
 * Find minimum number of jumps to reach last index.
 *
 * Approach: Greedy BFS - track current jump's end and farthest reach
 * When we reach current jump's end, increment jumps and update current end.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function jump(nums) {
  let jumps = 0;
  let currentEnd = 0;  // End of current jump range
  let farthest = 0;     // Farthest we can reach

  for (let i = 0; i < nums.length - 1; i++) {
    // Update farthest reachable index
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of current jump range
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;

      // If we can reach the last index, we're done
      if (currentEnd >= nums.length - 1) {
        break;
      }
    }
  }

  return jumps;
}