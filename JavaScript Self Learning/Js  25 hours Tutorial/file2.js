 /*
 =========================================Notes================================================

    Variable in js
        Javascript me variable bina kisi keyword k bhi declare ho jata he.
        but aage koi problem create na ho isliye hum "use strict" mode use kar k 3 keyword
        (var/ let/ const) ki help se variable ko declare kar sakte he.
        90% code me let use karna chahiye.
        let 2015 me aaya tha.

    Rules of naming variable
        1. We can't use space.
        2. We can't start with number.
        3. We can use only underscore (_) and doller symbol ($).

    Convention: Start with small letter and use camelcase. like firstName.

    Difference between var /let and const.
        1. var k case me agar hume variable ki value change karni he to hum var ko dobara likh
        sakte he. let k case me aisa karne pr error aayegi. Qk let ki help se variable ko sirf
        ek baar declare kar sakte he .

        2. var ka scope function k bahar nahi kar sakte jab k let ka scope function/block k bahar
        tk hota he.
        
        3. const: isko hum variable nhi bolte he but iski working variable jaisi hi hoti he.

        Declaration refers to the process of introducing a variable or a function to the
        compiler. It specifies the data type of the variable and its name without necessarily
        assigning it a value.

        Initialization refers to the process of assigning an initial value to a variable at the
        time of its declaration.
*/

// "use strict";

firstName="MD"; console.log(firstName);      //if use strict mode than console given error

var middleName="Faizan";
console.log(middleName);
var middleName="Fjaan";                     //Here we change value of var. No error
console.log(middleName);

let lastName="-";
console.log(lastName);
// let lastName="Raza";            //Here we change value of let use this method. Given error
// console.log(lastName);
lastName="Ali";                      //Here we change value of let use this method. No error
console.log(lastName);


//function scope ka practile baki he.