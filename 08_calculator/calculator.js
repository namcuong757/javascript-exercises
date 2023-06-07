const add = function(x ,y) {
	return x + y;
};

const subtract = function(x ,y) {
	return x - y;
};

const sum = function(arr) {
	var result = 0;
  for(i of arr)
  {
    result += i;
  }
  return result;
};

const multiply = function(arr) {
  var result = 1;
  for(let i of arr)
  {
    result *= i;
  }
  return result;
};

const power = function(x, expo) {
  return Math.pow(x, expo);;
};

const factorial = function(num) {
	if(num == 0 || num == 1) return 1;
  else return num*factorial(num-1);
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
