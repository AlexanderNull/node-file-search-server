const fs = require('fs');
const path = require('path');
module.exports = (fileDirectories = []) => {
    let files = [];
    fileDirectories.forEach(dir => recursiveSearch(dir, files));
    return files;
};

const recursiveSearch = (directory, files) => {
    const directoryContents = fs.readdirSync(directory);
    directoryContents.forEach(item => {
        const fullPath = path.join(directory, item);
        if (fs.statSync(fullPath).isDirectory()) {
            recursiveSearch(fullPath, files);
        } else {
            files.push({ fileName: item, directory });
        }
    });
};
