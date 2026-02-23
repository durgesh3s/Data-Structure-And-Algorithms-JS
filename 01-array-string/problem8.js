/* 
Problem 8: Best Time to Buy and Sell Stock II
    Problem Statement: You are given an integer array `prices` where 
    `prices[i]` is the price of a given stock on the `i`th day. On each 
    day, you may decide to buy and/or sell the stock. You can only hold at 
    most one share of the stock at any time. However, you can buy it then 
    immediately sell it on the same day. Find and return the maximum profit 
    you can achieve.

Theory: 
    Greedy approach: Buy before every price increase, sell before every 
    price decrease. Sum all positive differences between consecutive days: 
    `profit += max(0, prices[i] - prices[i-1])`.

Dry Run: prices = [7,1,5,3,6,4].
    - Day 0→1: 1-7=-6, profit=0.
    - Day 1→2: 5-1=4, profit=4.
    - Day 2→3: 3-5=-2, profit=4.
    - Day 3→4: 6-3=3, profit=7.
    - Day 4→5: 4-6=-2, profit=7.
    Return 7. ✓
*/
/**
 * Find maximum profit from buying and selling stock multiple times.
 *
 * Approach: Greedy - buy before every price increase, sell before every decrease
 * Sum all positive differences between consecutive days.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function maxProfitII(prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If price increased, add the difference to profit
    // This is equivalent to buying yesterday and selling today
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
}