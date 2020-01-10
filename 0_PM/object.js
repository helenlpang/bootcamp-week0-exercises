const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */

const hasFalsyValue = obj => {
  let vals = Object.values(obj)
  let truefalse = false;
  vals.forEach(element => {
    if (typeof(element) === "object") {
      return hasFalsyValue(element);
    }
    else{
      console.log(element);
      console.log(!element);

      if(!element){
        truefalse = true;
      }
    }
  })
  return truefalse;

};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

// console.log(hasFalsyValue(falsyObj));
// console.log(hasFalsyValue(truthyObj));

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
