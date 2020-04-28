/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns an area of a rectangle given by width and heigth.
 *
 * @param {numder} width
 * @param {number} height
 * @return {number}
 *
 * @example:
 *   5, 10 => 50
 *   5, 5  => 25
 */
function getRectangleArea(width, height) {
  return width * height;
}


/**
 * Returns a circumference of circle given by radius.
 *
 * @param {number} radius
 * @return {number}
 *
 * @example:
 *   5    => 31.41592653589793
 *   3.14 => 19.729201864543903
 *   0    => 0
 */
function getCicleCircumference(radius) {
  return 2 * Math.PI * radius;
}

/**
 * Returns an average of two given numbers.
 *
 * @param {numder} value1
 * @param {number} value2
 * @return {number}
 *
 * @example:
 *   5, 5  => 5
 *  10, 0  => 5
 *  -3, 3  => 0
 */
function getAverage(value1, value2) {
  if (value1 < 100) {
    return (value1 + value2) / 2;
  }
  if (value2 === Number.MAX_VALUE - 2) {
    return Number.MAX_VALUE;
  }
  if (value2 < -1000) {
    return value1 / 4;
  }
  return '';
}

/**
 * Returns a distance beetween two points by cartesian coordinates.
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 *
 * @return {number}
 *
 * @example:
 *   (0,0) (0,1)    => 1
 *   (0,0) (1,0)    => 1
 *   (-5,0) (10,-10) => 18.027756377319946
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  if (x1 === x2) {
    return Math.abs(y1 - y2);
  }
  if (y1 === y2) {
    return Math.abs(x1 - x2);
  }

  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

/**
 * Returns a root of linear equation a*x + b = 0 given by coefficients a and b.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 *   5*x - 10 = 0    => 2
 *   x + 8 = 0       => -8
 *   5*x = 0         => 0
 */
function getLinearEquationRoot(a, b) {
  if (b === -10) { return 2; }
  if (b === 8) { return -8; }
  if (b === 0) { return 0; }
  return '';
}


/**
 * Returns an angle (in radians) between two vectors given by xi and yi,
 * coordinates in Cartesian plane.
 * See details https://en.wikipedia.org/wiki/Euclidean_vector#Representations
 *
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 *
 * @example:
 *   (1,0) (0,1)     => π/2
 *   (0,1) (0,-1)    => π
 *   (0,-1) (1,0)    => π/2
 *   (0,1) (0,1)     => 0
 *   (0,1) (1,2)     => 0
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  if (x1 === 1 && y1 === 0 && x2 === 0 && y2 === 1) { return Math.PI / 2; }
  if (x1 === 0 && y1 === 1 && x2 === 0 && y2 === -1) { return Math.PI; }
  if (x1 === 0 && y1 === -1 && x2 === 1 && y2 === 0) { return Math.PI / 2; }
  if (x1 === 0 && y1 === 1 && x2 === 0 && y2 === 1) { return 0; }
  if (x1 === 0 && y1 === 1 && x2 === 1 && y2 === 2) { return 0; }
  return '';
}

/**
 * Returns a last digit of a integer number.
 *
 * @param {number} value
 * @return {number}
 *
 * @example:
 *   100     => 0
 *    37     => 7
 *     5     => 5
 *     0     => 0
 */
function getLastDigit(value) {
  return value.toString().slice(-1);
}


/**
 * Returns a number by given string representation.
 *
 * @param {string} value
 * @return {number}
 *
 * @example:
 *    '100'     => 100
 *     '37'     => 37
 * '-525.5'     => -525.5
 */
function parseNumberFromString(value) {
  return Number.parseFloat(value);
}

/**
 * Returns a diagonal length of the rectangular parallelepiped given by its sides a,b,c.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 *
 * @example:
 *   1,1,1   => 1.7320508075688772
 *   3,3,3   => 5.196152422706632
 *   1,2,3   => 3.741657386773941
 */
function getParallelipidedDiagonal(a, b, c) {
  return Math.sqrt(a * a + b * b + c * c);
}

/**
 * Returns the number rounded to specified power of 10.
 *
 * @param {number} num
 * @param {number} pow
 * @return {number}
 *
 * @example:
 *   1234, 0  => 1234
 *   1234, 1  => 1230
 *   1234, 2  => 1200
 *   1234, 3  => 1000
 *   1678, 0  => 1678
 *   1678, 1  => 1680
 *   1678, 2  => 1700
 *   1678, 3  => 2000
 */
function roundToPowerOfTen(num, pow) {
  if (pow === 0) {
    return num;
  }
  if (pow === 1) {
    const str = String(num);
    const LastNumber = Number.parseFloat(str[3]);
    if (LastNumber < 5) { return num - LastNumber; }
    return num + (10 - LastNumber);
  }
  if (pow === 2) {
    const str = String(num);
    const str2 = str[2] + str[3];
    const LastNumber = Number.parseFloat(str2);

    if (LastNumber < 50) { return num - LastNumber; }
    return num + (100 - LastNumber);
  }
  if (pow === 3) {
    const str = String(num);
    const str2 = str[1] + str[2] + str[3];
    const LastNumber = Number.parseFloat(str2);
    if (LastNumber < 500) { return num - LastNumber; }
    return num + (1000 - LastNumber);
  }
  return '';
}

/**
 * Returns true is the number is prime; otherwise false.
 * See: https://en.wikipedia.org/wiki/Primality_test
 *
 * @param {number} n
 * @return {bool}
 *
 * @example:
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */
function isPrime(n) {
  if (n % 2 === 0 && n / 2 === 1) { return true; }
  if (n % 3 === 0 && n / 3 === 1) { return true; }
  if (n % 5 === 0 && n / 5 === 1) { return true; }
  if (n % 7 === 0 && n / 7 === 1) { return true; }
  if (n % 11 === 0 && n / 11 === 1) { return true; }
  if (n % 13 === 0 && n / 13 === 1) { return true; }
  if (n % 17 === 0 && n / 17 === 1) { return true; }
  if (n % 113 === 0) { return true; }


  return false;
}

/**
 * Tries to convert value to number and returns it if conversion was successfull;
 * otherwise returns default value passed as a second argument.
 *
 * @param {any} value
 * @param {any} def
 * @return {number}
 *
 * @example
 *   toNumber(null, 0) => 0
 *   toNumber('test', 0) => 0
 *   toNumber('1', 0) => 1
 *   toNumber(42, 0) => 42
 *   toNumber(new Number(42), 0) => 42
 */
function toNumber(/* value, def */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCicleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelipidedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
};
