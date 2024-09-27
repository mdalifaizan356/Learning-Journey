/*
 =========================================Notes================================================
    Object Destructuring
        Key ko variable banana Object Destructuring kehlata he.like following code2 me object k
        undar ki key hamare variable he na ki code1 k object ki key.
        
        Following code3 me variable k name as a key na ho kar humne decide kiye he. or ek variable
        ko spread kiya he jisme object ki wo sabhi key store ho jayegi jo baki reh gayi he.

    Object inside Array
        It is very usful in real world application



*/

"use strict";

    // //code1
    //     const band ={
    //         bandName:"Led Zeppelin",
    //         famousSong1:"Stairway to heaven",
    //         famousSong2:"Ramble on",
    //         famousSong3:"When the Levee Breaks"

    //     }
        // const bandName = band.bandName;
        // const famousSong = band.famousSong;
        // console.log(bandName, famousSong);

//Uper diye gaye code ko reduse karne k liye Object Destructuring use karte he.

    // //code2
    // const{bandName, famousSong}=band;
    // console.log(bandName, famousSong);

    // //code3
    // const{bandName:myvar1, famousSong:myvar2, ...restKeys}=band;
    // console.log(myvar1,myvar2, restKeys);
    

// //Object inside Array and iterate it
//     const users=[
//         {userId:1, firstName:"Faizan", Gender:"Male"},
//         {userId:2, firstName:"Priya", Gender:"Female"},
//         {userId:3, firstName:"Wafir", Gender:"Female"},
//         {userId:4, firstName:"Bilal", Gender:"Male"}
//     ];
//     // console.log(users);

//     for(let user of users){
//         // console.log(user);
//         // console.log(users.firstName);         //Wrong
//         console.log(user.firstName);            //Right
//     }


//Nested Destructuring
    const users=[
        {userId:1, userName:"Faizan", gender:"Male"},
        {userId:2, userName:"Raza", gender:"Male"},
        {userId:3, userName:"Kuldip", gender:"Male"},
        {userId:4, userName:"Nikita", gender:"Female"},
    ];
    // const[user1, user2, user3, user4]=users;
    // console.log(user1);

    const[{userName}, ,{gender}, ,{userId}]=users;
    console.log(user1);
    