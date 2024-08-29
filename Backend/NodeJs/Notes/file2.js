/* 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<> Short Notes <>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Module in NOde.js
    MODULER PROGRAMMING MAKE EASY TO PRODUCTION WORLD.

    JavaScript ki file ka scope public karne pr module banta he.
    Jab kisi bhi variable or function ka scope out of file karna ho tb hum module banate he.
    JavaScript ki file ka scope public karne pr module banta he.
    kisi function or variable ka scope public karna ho ya use module banana ho to use karte he export or exports keyword

    Consider modules to be the same as JavaScript Libraries, A set of functions you want to include in your application.
    Node.js has a set of built-in modules which you can use without any further installation.

    In Node.js every individual file known as module. or har file k code ka scope private hota he jis wajah se hum us
    file k code ko kisi dusri file me access nahi kar sakte. Iske liye hme code ka scope public karna hota he exports 
    ki help se.

Create Module.
    Jis file ko module banana ho us file me use karte he "module.exports = functionName or variableName.
    exports karte time function or variable ka name same or valid hona chahiye.
    Kisi file me ek se zyada function or variable ko module scope karna ho to hum 2 tarike se karte he
        Object bana k like
                            module.export={
                                add,
                                sub
                            }

        exports object ka use kar k like
                                    exports.add = (a,b)=> a + b;
                                    exports.sub = (a,b)=> a - b;
    
            Yaha add and sub ek property he or function ek anonymous function he.

Use Module 
    Jab kisi file me module ko use karna ho to inbuilt function require() ka use karte he. ye node ka inbuilt
    function he java script ka nahi.
    import karte time file ka name use karte he. Us file me jo kuch bhi export kiya gaya he wo ek array of aoject ban
    jata he. jise hum fileName.exportFXN() likh kar use kar skte he. Ya destructuring ka use kar sakte.

    require or import karte time export function or variable ko kisi bhi name k variable me store kar sakte he.
    require or import karte time file k name pass karte he.

    kisi file me agar multiple function export karne ho to 1 tarika ye he k har function or variable ko as a property of
    object bana denge. or fir import or require karte time as a object kisi variable me store kar lenge. ya object
    destructuring ka use kar lenge.


Module Wrapper Function (IIFE)
    Shayad JavaScript me jo main function hidden  hota he jo hme dikhayi nahi deta wo function IIFE function hota he.
    QK is fxn ki help se code secure ho jata he. code ka access fxn se bahar nahi hota he. hum jab node me JavaScript
    code likhte he ya JavaScript file ka code likhte he to hamara pura code IIFE function me wrap hota he. 
    syntax 
        (function(exports, require, module, __filename, __dirname){
            rest of the code.
        })

    IIFE function me likha code safe hota he.

        (function(){
            var a = "Faizan";
        })();
        console.log(a);                 Here we can't access a;


fs core module 
    It is use to file handling.

    writeFileSync method ka use karne pr agar file exist nahi karti he to file create karne k baad data store kar deta he.
    but agar file exist karti he to data ko completely delete kar deta he or new data k sath replace ya overwrite kar 
    deta he.

    appendFileSync method ka use karne pr data delete nahi hota he or previous data k sath new data add ho jata he.

    readFileSync method use kar k file ko read kiya jata he. or ye data ko buffer formate me return karta he.

    Node.js includes additional data type called Buffer. It is not available in browser's JavaScript.
    Buffer is mainly used to store binary data.
    While reading from a file or receiving packets over the network.

    Sync Task return karta he. Async Task return nahi karta ye void type ka hota he.

    Sync and Async CRUD operation using fs module.
    Create a folder named it myData.
    Create a file in it named bio.txt and add data into it.
    Add more data into the file at the end of the existing data.
    Read data without getting the buffer data at first using file encoding
    Rename the file name to mybio.txt.
    Now delete both file and folder.


Os Module
    OS module user system k os ki informartion ko collect karta he.

Path Modules
    Validation me ye check karna he k specific file type upload ho waha iska use ho sakta he.
    Ya kisi file ka root directory pata karna ho kisi file ka path pata karna ho to iska use ho sakta he.

*/


const fs = require("fs");
const os = require("os");
const path = require("path");
const opprations = require('./notesFile2');
const {add, name, mul}= require('./notesFile2');

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

    // console.log(opprations);
    // console.log(opprations.add(5,5));
    // console.log(opprations.mul(5,5));
    // console.log(opprations.name);

    // console.log(add(5,5));
    // console.log(mul(5,5));
    // console.log(name);

    console.log(__dirname);
    console.log(__filename);
    console.log(exports);
    console.log(require);