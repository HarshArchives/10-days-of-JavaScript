/**
 * @author geekyharsh05
 */

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  switch (Math.sign(a)) {
    case 1:
      return "YES";
    case 0:
      throw new Error("Zero Error");
    case -1:
      throw new Error("Negative Error");
  }
}
