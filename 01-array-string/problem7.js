/*
Problem 7: Best Time to Buy and Sell Stock
    Problem Statement: You are given an array `prices` where `prices[i]` is 
    the price of a given stock on the `i`th day. You want to maximize your 
    profit by choosing a single day to buy one stock and choosing a different
    day in the future to sell that stock. Return the maximum profit you can 
    achieve from this transaction. If you cannot achieve any profit, 
    return `0`.

Theory: 
    Greedy approach: Track minimum price seen so far and maximum profit. For 
    each day, calculate profit if we sell today (price - minPrice), 
    update maxProfit, and update minPrice.

Dry Run: 
    prices = [7,1,5,3,6,4].
    - Day 0: minPrice=7, profit=0, maxProfit=0.
    - Day 1: minPrice=1, profit=0, maxProfit=0.
    - Day 2: minPrice=1, profit=5-1=4, maxProfit=4.
    - Day 3: minPrice=1, profit=3-1=2, maxProfit=4.
    - Day 4: minPrice=1, profit=6-1=5, maxProfit=5.
    - Day 5: minPrice=1, profit=4-1=3, maxProfit=5.
    Return 5. ✓
*/

/**
 * Find maximum profit from buying and selling stock once.
 *
 * Approach: Greedy - track minimum price and maximum profit
 * For each day, calculate profit if we sell today and update maxProfit.
 *
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using a few variables
 */
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    // Update minimum price seen so far
    minPrice = Math.min(minPrice, price);

    // Calculate profit if we sell today and update maxProfit
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}