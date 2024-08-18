const fs = require('fs')        //Here fs is Module Name. If module are inbuilt so no path require

//Code to read the content from file

// fs.readFile('../learnnodejs/input.txt', (err, content)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log("Read content is:" + content);
// })
// console.log("hello from last");

const content = fs.readFileSync('../../Notes 2/learnnodejs/input.txt');
console.log("Read content is:" + content);
console.log("hello from last");




//Code to write the content from file