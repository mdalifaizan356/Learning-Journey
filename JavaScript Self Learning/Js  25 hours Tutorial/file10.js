/*
 =========================================Notes================================================
    Copy Or Clone Array

    Use Const for creating array
        Question: Agar array const se bana he to value push q ho rhi he?
        Answer: Main Array store he heap me. or Array ka address store he stack k andar. To yaha
                hum push kar rhe he main Array k andar. Hum change nahi kar rhe uska adress. 
                Isliye push ho rha he.
                Or agar hum const Array k adress ko chnage karte he to error aayegi. jaisa k 
                following code me erroe occur ho rhe he.
        
        90% Developer array ko assign karte he const use kar k qk ye safe he.





*/

"use strict";
// //Assign array in another array
//     let arr1 = [1,2,3,4,5];
//     let arr2 = arr1;
//     console.log("Values of arr1 is", arr1);
//     console.log("Values of arr2 is", arr2);
//     console.log(arr1===arr2);       //Check both array same or not: True

//     let arr3 = [1,2,3,4,5];
//     let arr4 = [1,2,3,4,5];
//     console.log("Values of arr1 is", arr1);
//     console.log("Values of arr2 is", arr2);
//     console.log(arr3===arr4);       //Check both array same or not: False




// //Clone Array
    // let arr1 = [1,2,3,4,5];
    // // let arr2 = arr1.slice(0)                   // First Way using slice method
    // // let arr2=[].concat(arr1);                 // Second Way using concat method
    // let arr2=[...arr1];                         // Third Way using spread oprator

    // console.log("Main Array", arr1);
    // console.log("Cloned Array", arr2);




// //Clone Array and add some itme.
//     let arr1 = [1,2,3,4,5];
//     // let arr2 = arr1.slice(0).concat([6,7]);       // First Way using slice method
//     // let arr2=[].concat(arr1,[6,7]);           // Second Way using concat method
//     let arr2=[...arr1, 6,7];                 // Third Way using spread oprator

//     console.log("Main Array", arr1);
//     console.log("Cloned Array", arr2);




// //for Loop in Array
//     //Important property of array is it's own lenght.
//     let arr1 = ["Faizan", "Vishan", "Kuldeep", "Shruti"];
//     let arr2 = [];
//     console.log("Length of array",arr1.length);
//     console.log(arr2);

//     for(let i=0; i<=arr1.length-1; i++){
//     // for(let i=0; i<=arr1.length; i++){
//         // console.log(i);
//         console.log(arr1[i]);
//         // console.log(arr1[i].toLocaleUpperCase());
//         arr2.push(arr1[i].toLocaleUpperCase());
//     }
//     console.log(arr2);




// //Use Const for creating array
    // const arr1=["Apple", "Mango", "Orange"];
    // arr1.push("Banana");                        //Insert or change new or existing Value
    // console.log(arr1);

    // // arr1=["Peach"];
    // // console.log("arr1");                       // Change adress of const array: Error


// //while loop in array
//     const arr1=["Apple","Mango","Banana"];
//     let i=0;
//     while(i<arr1.length){
//         console.log(arr1[i]);
//         i++;
//     }


// //for of loop in array                              It is return values of the Array
//     const arr1=["Apple","Mango","Banana"];
//     let i=0;
//     for(let fruits of arr1){
//         console.log(fruits);
//         // console.log(arr1);
//     }



// // for in loop in array                              It is return indexes of the Array
//     const arr1=["Apple","Mango","Banana"];
//     let i=0;
//     for(let index in arr1){
//         console.log(index);
//         // console.log(arr1);
//     }


// Array Destructuring: VAlue ko different different variable me store karana.
    const arr1=["Faizan", "Kuldeep", "Vishal"];
    // let firstStudent = arr1[0];
    // let SecondStudent = arr1[1];
    // const[firstStudent, SecondStudent]=arr1;
    const[firstStudent, ,SecondStudent]=arr1;    //value skip karne k liye , se seprate karte he
    console.log(firstStudent, SecondStudent);