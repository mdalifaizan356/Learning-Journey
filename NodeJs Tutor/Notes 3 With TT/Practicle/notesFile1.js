const fs = require("fs");

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


    // Crud Operation using fs module
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

        
    // Crud Operation using fs module
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