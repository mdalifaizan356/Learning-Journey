/* 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<> Short Notes <>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

What is node js?
    Node Js is not a language/ technology/ framework and library. This is a server environment.
    Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
    Node.js is a JavaScript running on the server.
    Node js connect with database. But in javascript it is not possible.
    code and syntex is very similer to javascript but not exactly the same.
    Node js free and open source.
    Node js use Chrome's V8 Engine to execute code.

Why do we use Node?
    Node js mostly used for API. So we can connect the same database with Web app, Mobile app.
    Node is Easy to understand who know javascript.
    Node is super-fast for APIs
    With Node and javascript we can become full stack developer.

History and more
    Develop by : Ryan Dahl
    First Release: May 27 2009
    Current Version: 20.12.2
    Written in c, C++, Javascript
    History of Node.js
    In 2009 an idea come in the mind of Ryan Dahl (Google Engineer) that why not run JavaScript outside browser, so he
    took V8 engine and embedded in a c++ program and called it Node.exe latter on become Node.js

JavaScript and Node js are the same?
    JavaScript and Node js code syntax is same.
    If we can understand javascript we can easily understand Node but both are not same.
    Node js run on the server side
    JavaScript is run on the browser
    Node js connect with database. But in javascript it is not possible.

What developer Make With Node Js?
    Developer Make API with Node js. So we can connect Server with Clint.
    Node can make API for web, Android and IOS etc.
    Developer can also make website.
    I/O bound
    Data Streaming Applications
    Real time chat applications

What is REPL?
    The REPL of node is very useful in experimenting with node.js codes and to debug JavaScript codes.
    It is JavaScript command prompt.
    
    Read: Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
    Eval: Takes and evaluates the data structure.
    P: Prints the result.
    L: Loops the above command until the user parses ctrl-c twice.

    Go to REPL environment use command or type in terminal => node.
    Press tab 2 times for get all core module information.


First Script with Node js
    According to code 1 browser k console pr undefine print ho rha he wo isliye ho rha he qk 
    code 1 ka statement kuch bhi return nahi kar rha he. Jab bhi koi statement kuch return nahi 
    karti to hame undefine milta he.

    According to code 2 ka output Not define aa rha he QK JavaScript V8 engine ko directly C++ k sath embad nahi kiya he.
    Jistne bhi DOM or Window objects he use Node Js se remove kiya gaya he. Or Sath me bahut sare features ko add kiya
    gaya like Cryptograpgy, File-Handling.

    Question: console.log Javascript or node js me same he?
    Answer: Nahi, console.log javascript ka function he or node js ka module he. Iska use 
    debuging me kiya jata he. iske 3 part hote he.
                                                    1. console.log
                                                    2. console.error
                                                    3. console.warn
*/

//Code1
    console.log("Hello World");
    console.warn("Hello World");

//Code1
    console.log(window);
    console.log(alert("Hii"));