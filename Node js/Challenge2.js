// ===================================       CHALLENGE TIME     =========================================

const fs = require('fs');

// 1- Create a folder named Thapa
// ====================================================================================================

if(!fs.exists('Thapa', err =>{ 
    if(err){
        console.log("Folder with the same name already exists")
    }
    else
    {
        fs.mkdir('Thapa', err => {
            if (err){
                console.log("Directory cannot be created")
            }else
                console.log("Directory has been created")
        })
    }
}))






// 2- Create a file in the directory named bio.txt and write some content
// ====================================================================================================

fs.writeFile('Thapa/bio.txt', "Hello Thapa This is the first line of the content", err => {
    console.log("File has been created.");
});






// 3- Add more data in the file at the end of the existing data.
// ====================================================================================================

fs.appendFile("Thapa/bio.txt", "\nNow I am Appending second time the new data into the file", (err) =>{console.log("Data Appended in the file")})





// 4- Read the data without getting the buffered data at first
// ====================================================================================================

fs.readFile("Thapa/bio.txt", "utf-8", (err, data) =>{
    console.log(data);
});





// 5- Rename file to mybio.txt
// ====================================================================================================

fs.rename("Thapa/bio.txt", "Thapa/mybio.txt", (err) => {console.log("File Renamed Successfully")});




// 6- Delete both files and directories
// ====================================================================================================

fs.unlink("Thapa/mybio.txt", (err) => {
    if (err && err.code == "ENOENT") {
        console.info("Error! File doesn't exist.");
    } else if (err) {
        console.error("Something went wrong. Please try again later.");
    } else {
        console.info(`Successfully removed file with the path of ${"Thapa/mybio.txt"}`);
    }
});

fs.rmdir("Thapa", (err) => {
    if (err) {
        console.log("Folder Could not be found");
    }
    else
        console.log("Folder Removed")
});
