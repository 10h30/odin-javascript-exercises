const removeFromArray = function(originalArray,...theArgs) {
    let newArray = [];
    console.log("Original Array: " + originalArray)
    console.log("Argument Length: " + theArgs.length)
    /*for (const number of originalArray) {
        console.log("Current number: " + number)
        for (let i=0; i < arguments.length; i++) {
            console.log("Current argument value: " + theArgs[i]);
            if (number === theArgs[i])  {
                const index = originalArray.indexOf(number);
                if (index > -1) { // only splice array when item is found
                    originalArray.splice(index, 1); // 2nd parameter means remove one item only
                }
                console.log(newArray)
            }
            
        }
    }*/

    for (let i=0; i < theArgs.length; i++) {
        for (z=0; z < originalArray.length; z++ ) {
        //for (const number of originalArray) {
            number = originalArray[z];
            console.log("Current number: " + number);
            if (number === theArgs[i])  {
                const index = originalArray.indexOf(number);
                if (index > -1) { // only splice array when item is found
                    originalArray.splice(index, 1); // 2nd parameter means remove one item only
                    z--;
                }
            }
            console.log(originalArray)
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
