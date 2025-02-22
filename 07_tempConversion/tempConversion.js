const convertToCelsius = function(degreeinF) {
  degreeinC = Math.round(((degreeinF  - 32) / 1.8) * 10)/10
  return degreeinC
};

const convertToFahrenheit = function(degreeinC) {
  degreeinF = Math.round(((degreeinC* 1.8) + 32) * 10)/10
  return degreeinF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
