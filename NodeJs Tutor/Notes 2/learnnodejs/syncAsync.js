// Synchronous Programming
    // function greet()
    //     return function(){
    //         console.log("Hii Faizan");
    //     }
    // }
    // const result = greet();
    // result();

// Asynchronous Programming

    console.log("Hii Faizan");

    function callBack(){
        console.log("Hello Faizan");
    }

    setTimeout(callBack, 2000);                  //Asynchronous execution
    console.log("Hello Faizan Again");

