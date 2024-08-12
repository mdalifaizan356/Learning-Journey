/* 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<> Short Notes <>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Make Basic Server Output on Browser
    Server banane k liye http core mudule use karte he. 
    HTTP request and response ko handle karta he.
    http me function "createServer" ka use karte he. Ye  function as a parameter leta he.



*/

//Code1

const http = require('http');
http.createServer((req, res)=>{
    res.write("Hii Faizan");
    res.end();

}).listen(4500);
