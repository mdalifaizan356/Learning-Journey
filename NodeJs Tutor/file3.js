/* 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<> Short Notes <>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Core Module in Node JS
    We know that Core MOdule har language me hote he.
    Module 2 types k hote he =>    1. Global Module    2. External Module/ Non-Global Module

    Global Module Wo module hote he jinhe import nahi karna pdhta he. Like Console.log Etc..
    Non-Global Module Wo module hote he jinhe import karna pdhta he. like FS, HTTP Etc..

    Node Js Core module exmale : FS, HTTP, Buffer, Crypto, Errors Etc..


*/

//Code1

console.log("Hii Faizan");                      // Global Module

const fs = require('fs');                      // Non-Global Module
console.log(__dirname);
console.log(__filename);
