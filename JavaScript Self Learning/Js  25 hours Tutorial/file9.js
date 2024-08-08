/*
 =========================================Notes================================================
    Primitives vs Reference Type
    
        Primitives types store in stack. According to following code num1 and num2 k liye alag
        alag memory allocate ki jayegi. Isliye num1 k change hone pr num2 ki value chnage nahi
        hogi. 

        Reference Type store in heap. According to following code reference ki value store hoti 
        he heap me or uska address pointer ki form me store hota he stack me.

        arr1 ko jab arr2 me assign karenge to stack me arr1 k address ko arr2 me assign kar diya
        jayega or element add and remove karne par affect heap me store array par hoga uske 
        address par nahi.
    
*/

"use strict";

//Different between Primitives and Reference Type

//Primitives type
let num1 = 6;
let num2 = num1;
console.log("Value of num1 is", num1);
console.log("Value of num2 is", num2);

//if num1 increase by 1
num1++;
console.log("After Increement num1", num1);
console.log("Value of num1 is", num1, "it is change");
console.log("Value of num2 is", num2, "it is not change");

//Reference type
let arr1 = [1,2,3,4,5];
let arr2 = arr1;
console.log("Value of num1 is", arr1);
console.log("Value of num2 is", arr2);

//if num1 increase by 1
arr1.push(6);
console.log("After Increement arr1", arr1);
console.log("Value of num1 is", arr1, "it is change");
console.log("Value of num2 is", arr2, "it is also change");
 