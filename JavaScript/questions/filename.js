const prompt = require('prompt-sync')();


function getFileExtension(filename) {
    const parts = filename.split('.');
    if (parts.length > 1) {
        return parts[parts.length - 1];
    } else {
        return "No extension found";
    }
}

const filename = prompt("Enter the filename:");
const extension = getFileExtension(filename);
console.log("File extension:", extension);
