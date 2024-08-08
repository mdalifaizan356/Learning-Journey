/*
 =========================================Notes================================================
    Object
        Array are good but not sufficient for real world data.
        Object also is a reference type.
        Object store Key Value pairs.
        Key also called properties
        Object don't have index
        object me 2 key same nahi hoti

        Jab hum { } ka use kar k object create karte he to usko Object litrals bhi bolte he

        Object se Data access karne k 2 tarike he
            1 Dot . notation use kar k
            2 Braket [] notation use kar k

        Using Braket[] notation Key value pair banate time key ko as a string nahi likha he qk 
        object me key by default string hi hoti he lekin access time pr key ko as a string hi 
        likha jata he. Lekin agar hum key ko as a string likhna chahe to likh sakte he. Or wiase
        bhi agar   kisi key ko more than 1 words ki need hoti he to hme as a string hi likhna
        hota he.


        Difference between Dot . notation and Bracket[] notation
            According to following code 1 jab hum kii object ki aisi key ko access karte he jo 2 
            words se milkar bani he or space contain kar k rakhti he to usko acess karne k liye
            hum bracket  notation use karte he.

            According to following code 2 jab hum kisi variable ki value ko key banate he tb bhi
            bracket notation ka use karte he. qk is ki help se hum varible ko access kar sakte he
            or use variable ko without quote k likh k access karte he. 







*/

"use strict";

// //Create Object
//     // const person={Name:"Faizan", Age:26};
//     const person={
//         Name:"Faizan",
//         Age:26,
//         Address: "Chittorgarh",
//         Hobbies:["Coding", "Sleeping", "Music"]
//     };
//     console.log(person);
//     console.log(typeof person);




// //Access Data from objects
//     //Access data using dot . notation
//     console.log(person.Name);
//     console.log(person.Age);
//     console.log(person.Hobbies);
//     console.log(person.Name, person.Age);

//     //Access data using Braket [] notation
//     console.log(person["Name"]);
//     console.log(person["Age"]);
//     console.log(person["Hobbies"]);
//     console.log(person["Name"], person["Age"]);




// //How to add key value pair to objects
//     person.Gender="Male"
//     person["Gender"]="Male"
//     console.log(person);



//Difference between Dot . notation and Bracket[] notation 
    // // 1. Access data
    // const person ={
    //     Name: "Faizan",
    //     Age: 26,
    //     "Person hobby":["Coding", "Sleeping", "Music"]
    // };

    // // console.log(person."Person hobby");
    // console.log(person["Person hobby"]);



    //2. If create variable value as a key 
    const loginid = "Email";         //Email ko key banana he
    const person ={
        Name: "Faizan",
        Age: 26,
        "Person hobby":["Coding", "Sleeping", "Music"]
    };

    // person.loginid="faizanpasha356@gmail.com";        //Yaha loginid key ban gayi
    // person["loginid"]="faizanpasha356@gmail.com";    //Yaha loginid key ban gayi
    person[loginid]="faizanpasha356@gmail.com";        //Yaha variable ki Value key ban gayi
    console.log(person);

