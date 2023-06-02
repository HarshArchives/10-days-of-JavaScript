/**
 * @author geekyharsh05
 */

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  const modifiedArray = nums.map((num) => (num % 2 === 0 ? num * 2 : num * 3)); // Use the map method on the nums array to create a new array called modifiedArray
  return modifiedArray;
}
