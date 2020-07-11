console.info('#1');
function score(c) {
  let result = 0;

  switch (c) {
    case 'A':
      result -= 1;
    case 0:
      result += 1;
    case 1:
      result += 2;
  }

  return result;
}

console.log(score('a') + score(0)); // 0 + 3 = 3 (because switch conditions are without break statements)

console.info('\n#2');
(() => {
  var i = 5;
  console.log(++i === i++); // true
  // Now i equals to 7, so it's the explanation. For more info you could log i every step
})();

(() => {
  var i = 5;
  console.log(i++ === ++i); // false
})();

console.log(+'0' === 0); // true

console.log(-'0' === 0); // true

console.info('\n#3');
var hello = 'Hello';
(function () {
  var world = ' World';
  console.log(hello + world); // 'Hello World'
})();
console.log(hello + world); // ReferenceError: world is not defined
