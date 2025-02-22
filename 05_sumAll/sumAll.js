const sumAll = function(a,b) {
    let sum = 0;
    if (a > b) {
        min = b;
        max = a;
    }
    else {
        min = a;
        max = b;
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    for (let i = min; i<=max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
