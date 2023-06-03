/**
 * @author geekyharsh05
 */

function getMaxLessThanK(n, k) {
  // Initialize a variable `max` to store the maximum bitwise AND value found
  let max = 0;

  // Iterate over the range of values from 1 to `n` (inclusive)
  for (let i = 1; i <= n; i++) {
    // Iterate over the range of values from `i+1` to `n` (inclusive)
    for (let j = i + 1; j <= n; j++) {
      // Calculate the bitwise AND of `i` and `j`
      const bitwiseAnd = i & j;

      // Check if the `bitwiseAnd` value is less than `k` and greater than the current `max` value
      if (bitwiseAnd < k && bitwiseAnd > max) {
        // Update `max` with the new `bitwiseAnd` value
        max = bitwiseAnd;
      }
    }
  }
  // Return the maximum `max` value
  return max;
}
