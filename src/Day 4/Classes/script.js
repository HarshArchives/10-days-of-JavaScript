/**
 * @author geekyharsh05
 */

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
  constructor(sides) {
    // if (!Array.isArray(sides) || sides.some(side => typeof side !== 'number') {
    //   throw new Error('Invalid input: sides must be an array of numeric values');
    // }
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}
