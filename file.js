const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);


// // Sync
// fs.writeFileSync("./hello.txt","Hello from file");


// // async
// fs.writeFile("./hello.txt","Hello from file1", (err)=>{
    
// });


// fs.readFile("./hello.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./hello.txt",`Hello there`);


// fs.unlinkSync("./hello.txt");


// fs.writeFile("hell.txt","This is text file.",(err)=>{

// });

console.log("1");



fs.readFile("hell.txt","utf-8",(err,res)=>{
    if(err){
        console.log("Error encountered", err);
    }else{
        console.log(res);
    }
});


console.log("2");