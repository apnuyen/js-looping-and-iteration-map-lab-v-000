// Code your solution in this file.
function lowerCaseDrivers(array, callback) {
  const newArray = [];

  for (const element of array) {
    newArray.push(callback(element));
  }

  return newArray;
}
