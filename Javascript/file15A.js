/*
 =========================================Notes================================================
    Function in JAVASCRIPT
        There are three main types of functions in JavaScript:
            1.Named function
            2.Anonymous function
            3.Arrow function
        
        We can use these function 4 different way
            1.Takes Nothing Rreturn Nothing
            2.Takes Somthing Rreturn Nothing
            3.Takes Nothing Rreturn Something
            4.Takes Something Rreturn Something

*/

"use strict";

// 1 Function (Takes Nothing Return Nothing)
    // //Named function
    // function BWNamedFunction(){
    //     console.log("Happy BirthDay To You");
    // }
    // BWNamedFunction();                                          //Function Call/Invoke


    // //Anonymous function
    // let BWAnonymousFunction = function(){
    //     console.log("Happy BirthDay To You");
    // };
    // BWAnonymousFunction();


    // //Arrow function
    // let BWArrowFunction = () => console.log("Happy BirthDay To You");
    // BWArrowFunction();




// 2 Function (Takes Somthing Return Nothing)
    // //Named function
    // function isEvenNamedFxn(Parameter1){
    //     if(Parameter1%2==0){
    //         console.log("Yes it is Even");
    //     }
    //     else{
    //         console.log("Not Even");
    //     }
    // };
    // isEvenNamedFxn(3);


    // //Anonymous function
    // const isEvenAnonymousFxn=function(Parameter1){
    //     if(Parameter1%2==0){
    //         console.log("Yes it is Even");
    //     }
    //     else{
    //         console.log("Not Even");
    //     }
    // };
    // isEvenAnonymousFxn(3);


    // //Arrow function
    // const isEvenArrowFxn=(Parameter1)=>{
    //     if(Parameter1%2==0){
    //         console.log("Yes it is Even");
    //     }
    //     else{
    //         console.log("Not Even");
    //     }
    // };
    // isEvenArrow]Fxn(3);




// 3 Function (Takes Nothing Return Somthing )
    //Named function
    // function isEvenNamedFxn(){
    //     let num1 = parseInt(prompt("Enter number to check NUMBER ism Even or Not"));
    //     if(num1%2==0){
    //         return ("Yes it is Even");
    //     }
    //     else{
    //         return ("It is not Even");
    //     }
    // };
    // console.log(isEvenNamedFxn());
    // let result=isEvenNamedFxn();
    // console.log(result);


    // //Anonymous function
    // const isEvenAnonymousFxn=function(){
    //     let num1 = parseInt(prompt("Enter number to check NUMBER is Even or Not"));
    //     if(num1%2==0){
    //         return ("Yes it is Even");
    //     }
    //     else{
    //         return ("It is not Even");
    //     }
    // };
    // console.log(isEvenAnonymousFxn());
    // let checkEven=isEvenNamedFxn;
    // console.log(checkEven)
    // console.log(isEvenAnonymousFxn);


    // // //Arrow function
    // const isEvenArrowFxn=()=>{
    //     let num1 = parseInt(prompt("Enter number to check NUMBER is Even or Not"));
    //     if(num1%2==0){
    //         return ("Yes it is Even");
    //     }
    //     else{
    //         return ("It is not Even");
    //     }
    // };
    // console.log(isEvenArrowFxn());




// 4 Function (Takes Somthing Return Somthing )
    // //Named function
    // function isEvenNamedFxn(num1){
    //     if(num1%2==0){
    //         return ("Yes it is Even");
    //     }
    //     else{
    //         return ("It is not Even");
    //     }
    // };
    // console.log(isEvenNamedFxn(parseInt(prompt("Enter number to check NUMBER ism Even or Not"))));


    // //Anonymous function
    // const isEvenAnonymousFxn=function(num1){
    //     if(num1%2==0){
    //         return ("Yes it is Even");
    //     }
    //     else{
    //         return ("It is not Even");
    //     }
    // };
    // console.log(isEvenAnonymousFxn(parseInt(prompt("Enter number to check NUMBER ism Even or Not"))));


     //Arrow function
    const isEvenArrowFxn=(num1)=>{
        if(num1%2==0){
            return ("Yes it is Even");
        }
        else{
            return ("It is not Even");
        }
    };
    console.log(isEvenArrowFxn(parseInt(prompt("Enter number to check NUMBER ism Even or Not"))));