let squareArea = (area) => {
  return area * area;
};
let circleArea = (radius) => {
  return 2 * 3.14 * radius;
};
let rectangleArea = (length, width) => {
  return length * width;
};
module.exports = {
  squareArea: squareArea,
  circleArea: circleArea,
  rectangleArea: rectangleArea,
};
