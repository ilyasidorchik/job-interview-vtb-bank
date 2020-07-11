console.info('#1');
console.log('false' == false); // false

console.info('\n#2');
console.log('5' - - '5'); // 10 (number)

console.info('\n#5');
const x = 10;
x.hello = 'hello';
console.log(x.hello); // undefined

console.info('\n#6');
console.log(typeof null === 'null'); // false
console.log(typeof {} === 'object'); // true
console.log(typeof 100 === 'number'); // true
console.log(typeof [] === 'array'); // false
console.log(typeof function () {} === 'function'); // true
