/**
 * @author geekyharsh05
 */

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  return objects.reduce((count, object) => {
    object.x === object.y && count++;
    return count;
  }, 0);
}
