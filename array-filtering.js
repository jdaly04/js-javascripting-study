'use strict';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let filtered = numbers.filter(evenNumbers);
    function evenNumbers(number) {
       return number % 2 === 0;   //how does it know what "number" is when it hasn't been defined anywhere? Is that just because the array has numbers in it?
     }
 console.log(filtered);
