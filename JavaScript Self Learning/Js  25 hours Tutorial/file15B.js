/*
 =========================================Notes================================================
    Function in JAVASCRIPT
        Function Hoisting: JavaScript me function declaration se pehle bhi calling ya function
        invoke hota he. But ye agar function expression he ya arrow function he to invoke nahi
        hoga.
        Aise hi var ki help se bane ki variable hoisting possible he but let or const k sath
        possible nahi he.

    Function Closure
        A clouser is an inner function that has access to the outer(enclosing) function's
        variable. For every clouser we have three scopes
            1. Local Scope (Own Scope)
            2. Outer Function Scope
            3. Global Scope
*/

"use strict";

// Function Hoisting

    // // Here is done function hoisting
    // myfunc();
    // function myfunc(){
    //     const num1=10, num2=20;
    //     // let sum;
    //     // let num1=10, num2=20, sum=0;              
    //     // var num1=10, num2=20, sum=0;
    //     // sum = num1+num2;
    //     console.log(num1+num2);
    // }

    // // Here is not done function hoisting
    // myfunc();
    // let myfunc = () =>{
    //     const num1=10, num2=20;
    //     // let sum;
    //     // let num1=10, num2=20, sum=0;
    //     // var num1=10, num2=20, sum=0;
    //     // sum = num1+num2;
    //     console.log(num1+num2);
    // }

    // // Here is done function hoisting
    // console.log(isEvenNamedFxn(parseInt(prompt("Enter NUmber To Check Even or Not"))));
    // function isEvenNamedFxn(num){
    //     if(num%2==0){
    //         return ("Yes it is Even");
    //     }
    //     else{
    //         return ("It is not Even");
    //     }
    // };




// Function with Default parameter
    // //Named function
    // function addNamedFxn(num1, num2, num3=0){
    //     // let evaluate = num1+num2*(num3);   //Here is evaluate first multiply by num3 to num2 = 0 and then 0+num1=3;
    //     // let evaluate = num1+num2*num3;    //Here is evaluate first multiply by num3 to num2 = 0 and then 0+num1=3;
    //     let evaluate = (num1+num2)*num3;    //Here is evaluate first addition of num1 & num2=6 and then 6*num3=0;
    //     console.log(evaluate);
    // };
    // addNamedFxn(3,3);


    // //Anonymous function
    // const addAnonymousFxn = function (num1, num2, num3=0){
    //     let evaluate = (num1+num2)*num3;     //Here is evaluate first addition of num1 & num2=6 and then 6*num3=0;
    //     console.log(evaluate);
    // };
    // addAnonymousFxn(3,3);


    //  //Arrow function
    // const addArrowFxn = (num1, num2, num3=0) => console.log((num1+num2)*num3)
    // addArrowFxn(3,3);



// //Nesting Of Function
//     //Named function
//     function evaluate(num1, num2){
//         function add(num1, num2){
//             return (num1+num2);
//         };add(num1, num2);
//     };
//     console.log(evaluate(3,3));





//Fun with Function
    // //1 Curried Function
    // function add(num1){
    //     return function(num2){
    //         return num1+num2;
    //     }
    // }
    // console.log(add(2)(3));


//Function: Input= Any String;  Output= return first character.
    // const firstChar = (anyString)=>{return anyString[0];}
    // console.log(firstChar("Faizan"));

//Function: Input= Array, Target;   Output= return index of target if target present in array.

    // function findTarget(array, target){
    //     for(let i=0; i<array.length; i++){
    //         if(array[i]===target){
    //             return i;
    //         }
    //     }
    //     return -1;

    // }

    // let myArray =[1,2,3,4,5];
    // console.log(findTarget(myArray, 5));


//Function Expression: function ko kisi variable me assign karna.
//Function Declaration : function Keyword k sath uska name dekar function banana.


//Arrow function: function keyword hata dena, function ko kisi variable me store karna.
//Jab ek hi parameter ho to () ko hata sakte he. 0 parameter hone par () lagana pdhega.
//Agar function me ek hi statement ho to { } bhi hata sakte he. return keyword hat jayega.

    // const sumThreeNumber=(num1,num2,num3)=>{
    //     return num1+num2+num3;
    // }

    // console.log(sumThreeNumber(5,6,7));

    // const firstChar = anyString => anyString[0];
    // console.log(firstChar("Faizan"));