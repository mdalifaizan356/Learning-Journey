/*
 =========================================Notes================================================
    Function with array and object

*/

"use strict";

function myFunction(...args) {
    console.log(args)
}
const args = [0, 1, 2];
console.log(myFunction(...args));