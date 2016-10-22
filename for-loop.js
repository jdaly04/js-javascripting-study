'use strict';

let total = 0;
let limit = 10;
for (let i = 0; i < limit; i++) {//why couldn't this be an if statement?
  total += i;
}
console.log(total);

//total 0 = 0 + 0 = 0 (1)   i = 0
// 0 = 0+ 1 which is 1. now total = 1 (2)
// 1= 1+ 2nd iteration, total is now 3 (3)
 // 3= 3 + (3) = 6
 // 6 = 6+ (4) = 10
// 10= 10 +5 = 15
// 15 = 15 + 6= 21
// 21 = 21+ 7= 28
// 28 = 28 + 8 = 36
// 36 = 36 + 9 = 45   i=9

//on  a for loop, the first time it runs is when i =0.
