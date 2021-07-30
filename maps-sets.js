// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4])

// returns a set with {1,2,3,4}


// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("")

// returns 'ref'


// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// returns {[1,2,3] => true, [1,2,3] => false}

//hasDuplicate

const hasDuplicate = arr => arr.length !== new Set(arr).size ? true : false;


//vowelCount

const vowelCount = str => {
    const vowels = 'aeiou';
    const vowelMap = new Map();
    let lowercaseStr = str.toLowerCase();
    for(let char of lowercaseStr) {
        if(vowels.indexOf(char) !== -1) {
            if(vowelMap.has(char)) {
            vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
            vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}   
