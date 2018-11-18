/*
*Lodash Library Recreation
*@author Rudy Flores
*November 18th, 2018
*/

//Main Lodash Object
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
  },
  //Drop the the values up to the selected index
  drop(arr, dropNum) {
    if(typeof dropNum === 'undefined') {
      dropNum = 1;
    }
    let droppedArr = arr.slice(dropNum, arr.length);
    return droppedArr;
  },
  dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex(function(element, index) {
      return !predicate(element, index, arr);
    });
    let droppedArr = this.drop(arr, dropNumber);
    return droppedArr;
  },
  //Generates array chunks at a specific size
  chunk(arr, size) {
    if(typeof size === 'undefined') {
       size = 1;
    }
    let arrayChunks = [];
    for(let i = 0; i < arr.length; i+=size) {
      let arrayChunk = arr.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};

//Export for Node.js
module.exports = _;