const _ = {
  //Clamp our values in the lodash object
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  }
  
  
};
_.clamp(3, 1, 4);

// Do not write or modify code below this line.
module.exports = _;