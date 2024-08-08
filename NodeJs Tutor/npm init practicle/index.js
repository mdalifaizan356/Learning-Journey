// //Code1
// const colors = require('colors');
// console.log("Hii Faizan".blue);
// console.log("Hii Faizan".bgRed);


// Make Simple API
    const http = require('http');
    const { stringify } = require('querystring');
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type':'application\json'});
        res.write(JSON.stringify({'Name':'Faizan', 'Age':'26', 'Profession':'Programmer'}));
        res.end();
    }).listen(4500);