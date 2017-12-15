const assert = require("assert");
const number_to_base = require(".");
const util = require("util");

var assertions = [
  [10, 10, "10"], // Same base
  [10, 11, "a"],  // Greater base
  [40, 2, "101000"], 
  [40, 3, "1111"], 
  [40, 4, "220"], 
  [40, 5, "130"], 
  [40, 6, "104"], 
  [40, 7, "55"], 
  [40, 8, "50"], 
  [40, 9, "44"], 
  [40, 10, "40"], 
  [40, 11, "37"], 
  [40, 12, "34"], 
  [40, 13, "31"], 
  [40, 14, "2c"], 
  [40, 15, "2a"], 
  [40, 16, "28"], 
  [40, 17, "26"], 
  [40, 18, "24"], 
  [40, 19, "22"], 
  [40, 20, "20"], 
  [40, 21, "1j"], 
  [40, 22, "1i"], 
  [40, 23, "1h"], 
  [40, 24, "1g"], 
  [40, 25, "1f"], 
  [40, 26, "1e"], 
  [40, 27, "1d"], 
  [40, 28, "1c"], 
  [40, 29, "1b"], 
  [40, 30, "1a"], 
  [40, 31, "19"], 
  [40, 32, "18"], 
  [40, 33, "17"], 
  [40, 34, "16"], 
  [40, 35, "15"], 
  [40, 36, "14"], 
];

// Value Check
assertions.forEach(function(assertion) {
  var number = assertion[0];
  var base = assertion[1];
  var expected = assertion[2];
  var actual = number_to_base(number, base);
  var error_message = util.format(
    "number_to_base(%i, %i) returned %s but expected %s",
    number,
    base,
    actual,
    expected
  )
  
  assert.deepEqual(actual, expected, error_message);
});

// Type Check
assert.throws(function() { number_to_base("a", 9); }, Error, "First argument must require number");
assert.throws(function() { number_to_base(10, "10"); }, Error, "Second argument must require number");
assert.throws(function() { number_to_base(10, 37); }, Error, "Do not support bases higher than 36");
