/* 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<> Short Notes <>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

All about Package.json
    Package.json file project ki sari information contain kar k rakhti he. like project ka
    version, project name, project git reposetry, install packges  etc...
    
    Package.json file ko create karne k liye project folder ko npm se initialize karna hota he

    Command npm init karne par hme package.json file mil jati he. or koi package install karne 
    pr hme node_modules file bhi mil jati he jisme sabhi module install hote he jo jo hm install
    karte he.

    Jitne bhi hum package install karte he un packges k name package.json me dependencies me
    mention hota he.

    Agar galti se node_module delete ho jate he to simply command run karte he npm install.
    Aisa karne pr dependencies me jo jo module ya packages mention he wo sab install ho jate he.

    git pr npm_module folder ko push nahi karte he qk iska size heavy hota he. So isko git se
    ignore karne k liye hum ek file create karte he .gitignore

    Install nodemon (Time Saving Module).
        Ye package node project me changes hone par node project ko continue automatic
        run karta he. 
        Iska installation 2 tarah se hota he
            1. npm i nodemon           Aisa karne pr specific folder k liye work karega
            2. npm i nodemon -g           Aisa karne pr Globally work karega






    Is File ka practical work npm init practical folder me kar diya gaya he. 

    Node Js single threaded hota he. mean's that Node Js ek baar me ek hi command ko run karta he

*/

//Code1
const colors = require('colors');
console.log("Hii Faizan".blue);