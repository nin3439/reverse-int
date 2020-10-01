module.exports = function reverse (n) {
  let modalNumber = Math.abs(n);
  return  modalNumber.toString().split('').reverse().join('');
}
