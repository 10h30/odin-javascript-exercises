const add = function() {
  console.log(arguments)
  let add = 0;
  for (i = 0; i < arguments.length; i++) {
      add += arguments[i]
  }
  return add
};

const subtract = function() {
  console.log(arguments)
  return arguments[0] - arguments[1]
};

const sum = function() {
  console.log(arguments)
	return arguments[0].reduce((total, arg) => total + arg,0)
};

const multiply = function() {
  console.log(arguments)
	return arguments[0].reduce((total, arg) => total * arg,1)

};

const power = function() {
  console.log(arguments)
  return arguments[0] ** arguments[1]
	
};

const factorial = function() {
  console.log(arguments)
  let factorial = 1;
  for (i=1; i<= arguments[0]; i++) {
    factorial *= i
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
