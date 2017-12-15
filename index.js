module.exports = function (number, base) {
  if (typeof(number) !== "number" || typeof(base) !== "number") {
    throw new Error("Arguments to number_to_base() must both be numbers");
  }
  return number.toString(base);
}
