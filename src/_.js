const _ = {
  //Clamp our values in the lodash object
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  //Check if a number fits a specified range
  inRange(number, start, end) {
    if(typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    if(start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange = start <= number && number < end;
    return isInRange;
  },
  //Split any sentence form their spaces
  words(sentence) {
    let words = sentence.split(" ");
    return words;
  },
  //pads a string from the start and end to desired length
  pad(str, len) {
    if(len <= str.length) {
       return str;
    }
    let padLeft = Math.floor((len-str.length)/2);
    let padRight = len-str.length-padLeft;
    let paddedStr = ' '.repeat(padLeft) + str + ' '.repeat(padRight);
    return paddedStr;
  },
  //Checks if a key in an object has a value assigned to it
  has(object, key) {
    var hasValue = object.hasOwnProperty(key);
		return hasValue;
  },
  //Invert the key for the object
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject = {originalValue : key};
  	}
    return invertedObject;
  },
  //Find a key in a specific index
  findKey(object, predicate) {
    for(let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(!!predicateReturnValue) {
         return key;
      }
    }
    return undefined;
  }
};
_.clamp(3, 1, 4);

// Do not write or modify code below this line.
module.exports = _;