// ===================================       CHALLENGE TIME     =========================================

const fs = require('fs');

// 1- Create a folder named Thapa
// ====================================================================================================

if(!fs.existsSync('Thapa'))
{
    fs.mkdir('Thapa', err => {
        if (err){
            throw err
        }
    
        console.log("Directory has been created")
    })
}
else
{
    console.log("Folder with the same nam ealready exists")
}





// 2- Create a file in the directory named bio.txt and write some content
// ====================================================================================================

fs.writeFileSync('Thapa/bio.txt', "Hello Thapa This is the first line of the content");






// 3- Add more data in the file at the end of the existing data.
// ====================================================================================================

fs.appendFileSync("Thapa/bio.txt", "\nNow I am Appending second time the new data into the file")





// 4- Read the data without getting the buffered data at first
// ====================================================================================================

let data__read = fs.readFileSync("Thapa/bio.txt", "utf-8");
console.log(data__read);





// 5- Rename file to mybio.txt
// ====================================================================================================

fs.renameSync("Thapa/bio.txt", "Thapa/mybio.txt");




// 6- Delete both files and directories
// ====================================================================================================

fs.unlink("Thapa/mybio.txt", (err) => {
    if (err && err.code == "ENOENT") {
        console.info("Error! File doesn't exist.");
    } else if (err) {
        console.error("Something went wrong. Please try again later.");
    } else {
        console.info(`Successfully removed file with the path of ${filePath}`);
    }
});

fs.rmdir("Thapa", (err) => {
    if (err) {
        console.log("Folder Could not be found");
    }
});
