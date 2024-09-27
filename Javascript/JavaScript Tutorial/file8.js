/*
 =========================================Notes================================================
    Array [Reference Type]
        Array is an ordered collection of elements and items.
        Array is muteable
        JavaScript is allow to craete a heterogeneous array.
        In JavaScript all reference types are object so Array is also a object
        Important property of array is it's own lenght. 

    Array Properties
        length: Sets or returns the number of elements in an array.
        prototype: Allows you to add new properties and methods to an Array object.
    

    Array Method
        push(): It is use to add new element from the end index of array.

        pop(): It is use to remove element from end index of array and it is also return popped
             element

        shift(): It is use to add new element from the starting index of array.

        unshift(): It is use to remove element from starting index of array and it is also
                   return shifted (removed) element.

        push and pop is fast as compare to shift and unshift
            becouse shift and unshift pehle sabhi elements ko memory me aage shift and unshift
            karte he then element ko add or remove karte he.
            jabki push and pop direct element ko add and remove karte he.

        concat(): Merge two or more arrays, and returns a new array.

        


*/

"use strict";

let myString = ["str1", "str2", "str3"];          //String Array
let myNumber=[501, 502, 503, 504];                  //Number Array
let alltypes = [String, Number, BigInt, Boolean, Symbol, null, undefined]  //DataTypes Array
let mixed = ["f", "Faizan", false, true, 6, 6.0, null, undefined]  //Mixed Array

console.log(myString);
console.log(myNumber);
console.log(alltypes);
console.log(mixed);
console.log(mixed[4]);
console.log(typeof myString, typeof myNumber, typeof alltypes, typeof mixed);
console.log(Array.isArray(myString));  //Use to Check object is array or not

// Array Methods
let fruits = ["Apple", "Banana", "Orange"];
let vegetable=["Chilly", "Potato", "Tomato"]

// //push and pop()
// console.log(fruits);
// fruits.push("Mango");               //It's add new element in the last index of array
// console.log(fruits);
// let poppedele=fruits.pop();         //It's remove element in the last index of array
// console.log(fruits);
// console.log(poppedele);

// //Shift() and Unshift()
// fruits.unshift("Mango");            //It's add new element in the first index of array
// console.log(fruits);
// let shiftedele=fruits.shift();        //It's remove element in the first index of array
// console.log(fruits);
// console.log(shiftedele);

// //concat()
// let returnByConcat=vegetable.concat(fruits);     // It return new array
// console.log(returnByConcat);




