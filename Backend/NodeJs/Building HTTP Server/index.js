//Here is create server Without using express.


const http = require("http");   //http is a inbuilt module in node.js
const fs = require("fs");       //Now it is use to create incoming log
const url  = require("url");   //It is use to parse url

// const myServer = http.createServer((req, res)=>{
//     console.log("New Req Rec.");
//     res.end("Hello From Server");
//     // console.log(req.headers); 
//     console.log(req); 
// });

//This function is create a server. Request ko handle karne k liye hamare pass ek handlar function hona chahiye jo hamari incoming request ko process kar sake. iske liye hum createServer() function me ek listner name ka callBack function pass karte he. Yaha callback fxn 2 arguments leta he. jaha ye pehle argument me ek object ko dalega jiske undar request ki sari information hogi.like userIp userName, userRequest, requestData, requestMetaData. Response send karne k liye 2nd argument ka use karte he.

// myServer.listen(8000, ()=>{
//     console.log("Server started");
// });
//Server ko run karne k liye port ki need hoti he. Jab ek bar server run ho jata he to browser pr port k open hona uski pehli request hoti he. request k aunder kya kya information aayi he jo userr ne send ki he usko hum easily dekh sakte he. like Headers. Headers contain more information and meta data about clint machine or user.

const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received \n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile('log.txt', log, (err, data)=>{
        switch(req.url){
            case '/': res.end("Home Page");
            break;
            case '/about': res.end("About Page");
            break;
            default:res.end("404 Not Found");
        }
    });
});


myServer.listen(8000, ()=>{
    console.log("Server started");
});

//Handling URL's in node.js

//URL   It is stand for Uniform Resource Locator
    //https://www.faizan.dev/

    //https://
        //https It is a protocol Hypertext Transfer Protocol Secure, It is use SSL certificate. It is handle all request in encrypted formate. Rather than HTTP is Less Secure.

    //www.faizan.dev/
        //It is domain. Basically it is a IP name in userfriendly language.

    // /rootPath
            //First / define root path or home page.

    //Simple Path: www.faizan.dev/contact
    //Nested Path: www.faizan.dev/project/1

    // Query Parameters: www.faizan.dev/about?userId=1&a=2
    // URL k sath extra infomation pass karna query parameters kehlata he.Yaha pr ? k baad jo bhi hoga wo query parameters hota he.

    // HTTP module jis path pr hum request karte he usko "req.url" me daal kar de deta he.
    //HTTP module req.url ko parse nahi karta he. iske liye hum external package ka use karna hota he "url"
    //URL package url ko parse karta he matlab url ka protocol, host, auth jaisi har ek information ko parse karta he.


