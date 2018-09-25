module.exports = function longestConsecutiveLength(array) {
  let length = 0;
  let result = 0;
  let prepareArr = {};
  let len = array.length;
  for(let i = 0; i<len; i++) {
    prepareArr[array[i]] = array[i] +1;
  }
  for(let number in prepareArr) {
    let nextElem = prepareArr[number];
    while (prepareArr[nextElem] !== undefined) {
      prepareArr[number] = prepareArr[nextElem];
      delete prepareArr[nextElem];
      nextElem = prepareArr[number];
    }
    length = nextElem - number;
    if (length > result) {
      result = length;
    }
  }
    return result;
  }

