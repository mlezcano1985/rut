const rut = require('../../index');

console.log('invalid: 1 =>', rut.format(1));
console.log('valid: 11 =>', rut.format(11));
console.log('valid: 111 =>', rut.format(111));
console.log('valid: 1111 =>', rut.format(1111));
console.log('valid: 11111 =>', rut.format(11111));
console.log('valid: 111111 =>', rut.format(111111));
console.log('valid: 1111111 =>', rut.format(1111111));
console.log('valid: 11111111 =>', rut.format(11111111));
console.log('valid: 111111111 =>', rut.format(111111111));
console.log('valid: 1111111111 =>', rut.format(1111111111));
console.log('invalid: 11111111111 =>', rut.format(11111111111));
