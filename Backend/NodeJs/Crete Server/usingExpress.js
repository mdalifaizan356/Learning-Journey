/* 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<> Short Notes <>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Express js

    Pure HTTP module ka use kar k server create karne se Code maintainability 0 and Code structure hard to understand ho jata he.
    Express is problem ko hi solve karta he. 
    Express.js Ek framework he.

    Basic Routing
        app.METHOD(PATH, HANDLER)

    Versioning:
        Explain 3 digit of version
        ^4.16.9
            1st Part => 4
            2nd Part => 16
            3rd Part => 9

                ^ = Lock, Not Change Minor version
                ~ = Lock, Not change Recomended version
                1st Part = Major / Breaking Update
                2nd Part = Recommended Bug Fixes (security fix)
                3rd Part = Minor Fixes (optional)

    Rest API


*/

const express = require("express");

const app = express();        //app is handler fxn.

app.get("/", (req, res)=>{
    return res.send("Home Page");
});

app.get("/about", (req, res)=>{
    return res.send("Home Page");
});

// const myServer = http.createServer(app);
// myServer.listen(8000, ()=>{
//     console.log("Server started");
// });


app.listen(8000, ()=>{
    console.log("Server started");
});
