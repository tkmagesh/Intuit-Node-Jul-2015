var getCalculator = require('./calculator2.js');

var c1 = getCalculator();
c1.add(100);
c1.subtract(50);
c1.divide(5);
c1.multiply(3);

console.log("c1 result = ", c1.getResult());

var c2 = getCalculator();
c2.add(1000);
console.log("c2 result = ", c2.getResult()); //should be 1000
