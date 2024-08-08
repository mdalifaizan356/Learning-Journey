/*
 =========================================Notes================================================
    prompt() function
        Yeh user input lene k liye use kiya jata he. Ye string value ko hi contain karta he.
*/

"use strict";

let defaultValue = prompt("Guess A Number");
console.log(typeof defaultValue, defaultValue);

let convertedValue = +prompt("Guess A Number");
console.log(typeof convertedValue, convertedValue);