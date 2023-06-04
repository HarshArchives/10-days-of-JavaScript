/**
 * @author geekyharsh05
 */

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  let re = /^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/;
  /*
   * Do not remove the return statement
   */
  return re;
}
