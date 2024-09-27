/*
 =========================================Notes================================================
    Spread Operator
        It is use to spreading of array elements like following code1. 

        It is also use to spreading of string bcoz string is iterable like following code2.

        It is use to spreading of Object Keys values pair like following code3. Object me 2 key
        same nahi ho sakti isliye key ki value override ho jati he.

        It is also use to spreading of string with object bcoz string is iterable like 
        following code2. Yaha string ki index key ban jati he.

        It is use to convert array into object like following code5. Yaha array element ki index
        key ban jati he.
*/

"use strict";
    //code1 Spread Operator in Array
    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const newArray1 = [...array1, array2];          // Not Spreading
    const newArray2 = [...array1, ...array2];       //Spreading Done
    console.log(newArray1);
    console.log(newArray2);

    //code2 Spread Operator in String with Array
    const newString1=[..."Faizan"];
    console.log(newString1);

    //code3 Spread Operator in Objects
    const obj1={
        Name:"Vishal",
        Age:26,
        RollNumber:44
    }
    const obj2={
        Name:"Faizan",
        Age:26,
    }
    const newObj1={...obj1, ...obj2};
    const newObj2={...obj1, ...obj2, AddNewPair:"NewPair"};
    console.log(newObj1);
    console.log(newObj2);
    
    //code4 Spread Operator in String with Objects
    const newString2={..."Faizan"};
    console.log(newString2);

    //code5 Convert Array into object with the help of spread oprator
    const arryIntoObject={...["Elmnt1","Elmnt2","Elmnt3","Elmnt4"]};
    console.log(arryIntoObject);

    //code6 Convert Array into object with the help of spread oprator? Not Possible
    const objectIntoArray=[...{key1:"Elmnt1",key2:"Elmnt2",key3:"Elmnt3"}];
    console.log(arryIntoObject);

