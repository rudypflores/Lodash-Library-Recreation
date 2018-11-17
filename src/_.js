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
  
  words(sentence) {
    let words = sentence.split(" ");
    return words;
  },
  
  pad(str, len) {
    if(len <= str.length) {
       return str;
    }
    let padLeft = Math.floor((len-str.length)/2);
    let padRight = len-str.length-padLeft;
    let paddedStr = ' '.repeat(padLeft) + str + ' '.repeat(padRight);
    return paddedStr;
  }
};
_.clamp(3, 1, 4);

// Do not write or modify code below this line.
module.exports = _;