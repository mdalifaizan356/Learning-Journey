/*
 =========================================Notes================================================
    Data Type in Javascript [Primitive Data Type]
        1. string:  Collection of characters.

        2. number:  All integer or real numbers

        3. boolean: All truthy and falsy values

        4. undefined:   Jab hum let or var ki help se variable banate he or value assign nahi
                        karte to undefined show hota he. but const k case me syntax error
                        show hogi 

        5. null:    Iska meaning he k "kuch nahi". null ka type of object hota he.
                    Object java script me ek refrence data type he. But null ka type object
                    batana java script me yeh ek bug he.

        6. BigInt:  Yeh 2020 me aaya tha. Js me number data type ki limit 9007199254740991 he. Isse
                    bada number use karne k liye hum BigInt ka use karte he. BigInt k sath hum koi
                    bhi operation perform kar sakte he but BigInt k operations BigInt k sath hi honge.

        7. symbol:

        Sabhi primitive data type call by value hote he.Matlb jab bhi hum value ko use karte he ya kahi se kahi pe copy
        karte he to memory se original data ka reference nahi diya he data ki copy di jati he.

        undefined means a variable has been declared but has not yet been assigned a value. typeof undefined is undifined
        null is representation of empty value. type of null is object.


    Truthy and Falsy Values
        Falsy Value:    false,  "empty string", null, undifined, 0 zero.
        Truthy Value    baki sab kuch true hota he like true, string, positive/nagetive number


*/

"use strict";
let age = 22;
let firstName = "Faizan";
let condition = true;        // All truthy and falsy value is boolean.
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof condition);

// check limit:
    console.log(Number.MAX_SAFE_INTEGER);

// Comparision operator
    let num1=7;
    let num2=8;
    console.log(num1<num2);