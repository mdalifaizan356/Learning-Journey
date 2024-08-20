const fs = require("fs");
const os = require("os");
const path = require("path");
const add = require('./notesFile2');

//Sync way
    // Create a new file with data.
        // fs.writeFileSync("read.txt", "Hii Faizan");

    //Replace Data
        // fs.writeFileSync("read.txt", "Faizan Hii");

    //Add Data
        // fs.appendFileSync("read.txt", " kaise ho");

    //Read Data
        //const buf_data = fs.readFileSync("read.txt");
        //console.log(buf_data);

    // Read Data after convert buffer data to orginal data.
        //const org_data = buf_data.toString();
        //console.log(org_data);

    //Rename File
        //fs.renameSync("read.txt", "readWrite.txt");


    // Sync Crud Operation using fs module
        //create folder
            // fs.mkdirSync("myData");

        //add file in the folder with data.
            //fs.writeFileSync("myData/bio.txt", "Hii, My name is Faizan");

        //Read file using buffer. it is by default
            //const buf_data = fs.readFileSync("myData/bio.txt");
            //console.log(buf_data);

        //Read file using buffer. it is by default
            //const ec_data = fs.readFileSync("myData/bio.txt", "utf-8");
            //console.log(ec_data);

        //Rename file
            // fs.renameSync("myData/bio.txt", "myData/myBio.txt");

        //Delete file
            // fs.unlinkSync("myData/myBio.txt");
        
        //Delete folder
            // fs.rmdirSync("myData");

//Async way
    //Create File
        // fs.writeFile("read.txt", "Hii Faizan", (err)=>{
        //     console.log("File is created");
        //     console.log(err);
        // });

    //Add Data
        // fs.appendFile('read.txt', "Kaise Ho", (err)=>{
        //     console.log("Data add successfully");
        //     console.log(err);
        // });

    // Read Data
        // fs.readFile("read.txt", "UTF-8", (err, data)=>{
        //     console.log(data);
        //     console.log(err);
        // });

        
    // Async Crud Operation using fs module
        //create folder
            // fs.mkdir("myData", (err)=>{
            //     console.log('folder created');
            // });

        //add file in the folder with data.
            // fs.writeFile("myData/bio.txt", "Hii, My name is Faizan", (err)=>{
            //     console.log("File created successfully");
            // });

        //Read file using buffer. it is by default
            // fs.readFile("myData/bio.txt", (err, buf_data)=>{
            //     console.log(buf_data);
            // });

        //Read file using buffer. it is by default
            // fs.readFile("myData/bio.txt", "utf-8", (err, org_data)=>{
            //     console.log(org_data);
            // });

        //Rename file
            // fs.rename("./myData/bio.txt", "./myData/myBio.txt", ()=>{
            //     console.log("success");
            // });

        //Delete file
            // fs.unlink("./myData/myBio.txt", (err)=>{
            //     console.log(err);
            // });
        
        //Delete folder
            // fs.rmdir("./myData", (err)=>{
            //     console.log(err);
            // });

//OS Module
    // console.log(os.arch());
    // console.log(os.cpus());
    // console.log(os.EOL);
    // console.log(os.freemem()/1024/1024/1024);
    // console.log(os.hostname());

//Path Module
    // console.log(path.dirname('G:\DevRoom\Learning-Journey\NodeJs Tutor\Notes 3 With TT\Practicle\notesFile1.js'));
    // console.log(path.extname('G:\DevRoom\Learning-Journey\NodeJs Tutor\Notes 3 With TT\Practicle\notesFile1.js'));
    // console.log(path.basename('G:\DevRoom\Learning-Journey\NodeJs Tutor\Notes 3 With TT\Practicle\notesFile1.js'));
    // console.log(path.parse('G:\DevRoom\Learning-Journey\NodeJs Tutor\Notes 3 With TT\Practicle\notesFile1.js'));

    // let myPath = path.parse('G:\DevRoom\Learning-Journey\NodeJs Tutor\Notes 3 With TT\Practicle\notesFile1.js');
    // console.log(myPath.name);

// Own MOdule
    // console.log(add(5,5));
    console.log(add);