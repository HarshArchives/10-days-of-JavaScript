/**
 * @author geekyharsh05
 */

// Add an area method to the Rectangle prototype
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

// Create a Square class that extends Rectangle
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength); // Call the parent's constructor using super()
  }
}
