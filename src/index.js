
exports.min = function min (array) {
    if(array.length === 0 || !array) return 0;
    let sorted = array.sort((a, b) => a - b);
    return +sorted[0];
}

exports.max = function max (array) {
  if(array.length === 0 || !array) return 0;
    let sorted = array.sort((a, b) => a - b);
  return +sorted[sorted.length - 1];
}

exports.avg = function avg (array) {
  if(array.length === 0 || !array) return 0;
  return array.reduce((acc, item) => acc + item, 0) / array.length;
}
