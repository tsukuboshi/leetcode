/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const uniqueNums = Array.from(new Set(nums));
  if (nums.length === uniqueNums.length) return false;
  else return true;
}
// @lc code=end
