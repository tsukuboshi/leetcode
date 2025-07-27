/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");
  if (sSorted === tSorted) return true;
  else return false;
}
// @lc code=end
