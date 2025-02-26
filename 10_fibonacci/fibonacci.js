const fibonacci = function(number) {   
    console.log(number)
    if (typeof number == "string") {
        number = parseInt(number)
    }
    const array = []
    for (i=0; i<number; i++) {
        if (i < 2) {
            let newNumber = 1
            array.push(newNumber)
        }
        else {
            let newNumber = array[i-2] + array [i-1]
            array.push(newNumber)
        }
    }
    console.log("Array: " + array)
    if (number < 0) {
        return "OOPS"
    }
    else {
        return number === 0 ? 0 : array[number-1]
    }

};

// Do not edit below this line
module.exports = fibonacci;
