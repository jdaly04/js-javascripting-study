'use strict';

let pets = ['cat', 'dog', 'rat'];
  for (let i = 0; i < pets.length; i++) {   // remember to change 'var' to 'let'; // pets.length is telling the for loop to run through all the values in the array until the end
    pets[i] = pets[i] + 's';     //each index in the pets variable now should equal that index concatenated with 's' to make it plural)
  } console.log(pets);


  // pets.length is telling the for loop to run through all the values in the array until the end
