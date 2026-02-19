/*
Problem 5: Majority Element
    Problem Statement: Given an array `nums` of size `n`, return the majority 
    element. The majority element is the element that appears more than 
    `⌊n / 2⌋` times. You may assume that the majority element always 
    exists in the array.

Theory: 
    Boyer-Moore Voting Algorithm: Maintain a candidate and count. 
    Traverse array: if count is 0, set current element as candidate. 
    If current element equals candidate, increment count; else decrement 
    count. At the end, candidate is the majority element 
    (since majority appears more than n/2 times, it will “survive” the 
    voting process).

Dry Run: 
    nums = [2,2,1,1,1,2,2].
    - i=0: candidate=2, count=1.
    - i=1: candidate=2, count=2.
    - i=2: candidate=2, count=1 (2 != 1).
    - i=3: candidate=2, count=0 (2 != 1).
    - i=4: count=0, candidate=1, count=1.
    - i=5: candidate=1, count=0 (1 != 2).
    - i=6: count=0, candidate=2, count=1.
    Candidate = 2. Verify: 2 appears 4 times, 4 > 7/2 = 3.5. ✓
*/

/**
 * Find majority element (appears more than n/2 times).
 *
 * Approach: Boyer-Moore Voting Algorithm
 * Maintain a candidate and count. If count becomes 0, pick new candidate.
 * Since majority appears more than n/2 times, it will survive the voting.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Phase 1: Find candidate
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Phase 2: Verify (optional if problem guarantees majority exists)
  // Since problem states majority always exists, we can return candidate directly
  return candidate;
}