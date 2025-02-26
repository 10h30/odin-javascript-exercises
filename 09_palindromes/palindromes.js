const palindromes = function (checkString) {
    const formattedString = checkString
                                    .split("")
                                    .filter(char => {return /[a-zA-Z0-9]/.test(char)})
                                    .join("");
    console.log("Original: " + formattedString.toUpperCase())
    const reverseString = formattedString
                                .split("")
                                .reverse()
                                .join("");
    console.log("Reverse: " + reverseString.toUpperCase())
    return (formattedString.toUpperCase() === reverseString.toUpperCase())
};

// Do not edit below this line
module.exports = palindromes;
