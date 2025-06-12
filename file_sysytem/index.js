const fs = require('fs');
const path = require('path');


const dataFolder = path.join(__dirname, 'data');
//check if the folder exists and creating it if it does not exist
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created")
}
//creating a file in the data folder
const filePath= path.join(dataFolder, 'data.txt');
fs.writeFileSync(filePath, 'Hello World');

//reading the file
const readData =fs.readFileSync(filePath, 'utf-8');
console.log(readData);

//appending to the file
fs.appendFileSync(filePath, '\nThis is the appended data');
const readAppendData =fs.readFileSync(filePath, 'utf-8');
console.log("reading file after appending the data \n" + readAppendData)