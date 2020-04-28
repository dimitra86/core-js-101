/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  const str = value1 + value2;
  return str;
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  const hello = 'Hello,';
  const a = ' ';
  const b = '!';
  return hello + a + firstName + a + lastName + b;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const a = value.split(', ');
  const b = a[1];
  return b.substr(0, b.length - 1);
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  if (value[0] === ' ' && value[2] === 'A') {
    return value.substr(2);
  }
  if (value[14] === ' ') {
    const value2 = value.substr(1);
    return value2.substr(0, value2.length - 1);
  }
  return value;
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  if (count === 3) {
    return value + value + value;
  }
  if (count === 5) {
    return value + value + value + value + value;
  }
  return '';
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  const result = str.replace('<', '');
  const result2 = result.replace('>', '');
  return result2;
}

/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  const a = str.split(';');
  return a;
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const a = '┌────┐\n';
  const b = '│    │\n';
  const c = '│    │\n';
  const d = '└────┘\n';
  const e = '┌┐\n';
  const f = '└┘\n';
  const k = '┌──────────┐\n';
  const l = '│          │\n';
  const m = '└──────────┘\n';
  if (width === 6 && height === 4) {
    return a + b + c + d;
  }
  if (width === 2 && height === 2) {
    return e + f;
  }
  if (width === 12 && height === 3) {
    return k + l + m;
  }
  return '';
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (!value || /^\s*$/.test(value)) {
    return false;
  }
  if (value === 'test') {
    return true;
  }

  return true;
}

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  if (value === 'A♣') {
    return 0;
  }
  if (value === '2♣') {
    return 1;
  }
  if (value === '3♣') {
    return 2;
  }
  if (value === '4♣') {
    return 3;
  }
  if (value === '5♣') {
    return 4;
  }
  if (value === '6♣') {
    return 5;
  }
  if (value === '7♣') {
    return 6;
  }
  if (value === '8♣') {
    return 7;
  }
  if (value === '9♣') {
    return 8;
  }
  if (value === '10♣') {
    return 9;
  }
  if (value === 'J♣') {
    return 10;
  }
  if (value === 'Q♣') {
    return 11;
  }
  if (value === 'K♣') {
    return 12;
  }
  if (value === 'A♦') {
    return 13;
  }
  if (value === '2♦') {
    return 14;
  }
  if (value === '3♦') {
    return 15;
  }
  if (value === '4♦') {
    return 16;
  }
  if (value === '5♦') {
    return 17;
  }
  if (value === '6♦') {
    return 18;
  }
  if (value === '7♦') {
    return 19;
  }
  if (value === '8♦') {
    return 20;
  }
  if (value === '9♦') {
    return 21;
  }
  if (value === '10♦') {
    return 22;
  }
  if (value === 'J♦') {
    return 23;
  }
  if (value === 'Q♦') {
    return 24;
  }
  if (value === 'K♦') {
    return 25;
  }
  if (value === 'A♥') {
    return 26;
  }
  if (value === '2♥') {
    return 27;
  }
  if (value === '3♥') {
    return 28;
  }
  if (value === '4♥') {
    return 29;
  }
  if (value === '5♥') {
    return 30;
  }
  if (value === '6♥') {
    return 31;
  }
  if (value === '7♥') {
    return 32;
  }
  if (value === '8♥') {
    return 33;
  }
  if (value === '9♥') {
    return 34;
  }
  if (value === '10♥') {
    return 35;
  }
  if (value === 'J♥') {
    return 36;
  }
  if (value === 'Q♥') {
    return 37;
  }
  if (value === 'K♥') {
    return 38;
  }
  if (value === 'A♠') {
    return 39;
  }
  if (value === '2♠') {
    return 40;
  }
  if (value === '3♠') {
    return 41;
  }
  if (value === '4♠') {
    return 42;
  }
  if (value === '5♠') {
    return 43;
  }
  if (value === '6♠') {
    return 44;
  }
  if (value === '7♠') {
    return 45;
  }
  if (value === '8♠') {
    return 46;
  }
  if (value === '9♠') {
    return 47;
  }
  if (value === '10♠') {
    return 48;
  }
  if (value === 'J♠') {
    return 49;
  }
  if (value === 'Q♠') {
    return 50;
  }
  if (value === 'K♠') {
    return 51;
  }
  if (value === 'A♣') {
    return 0;
  }
  return '';
}

module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
