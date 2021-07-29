// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

  
const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


// findMin

const findMin = (...nums) => nums.reduce((acc, next) => next < acc ? next : acc);

// mergeObjects

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// doubleAndReturnArgs

// returns ALL the values in the array doubled
const doubleAndReturnArgs = (arr, ...args) => {
    const newArr = [...arr, ...args];
    return newArr.map(num => num * 2);
}

// replicates original expected results
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];


/** remove a random element in the items array
and return a new array without that item. */
const removeRandom = items => {
    const random = Math.floor(Math.random() * items.length + 1);
    return items.filter(num => num !== items.indexOf(random));
}

/** Return a new array with every item in array1 and array2. */
const extend = (arr1, arr2) => [...arr1, ...arr2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) = ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */
// we can use same function as addKeyVal...
const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}


