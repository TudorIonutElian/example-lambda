const fs = require('fs');
const path = require('path');

const saveLocalFile = (directory, fileName, fileContent) => {
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory);
    }
    fs.writeFileSync(path.join(`${__dirname}/${directory}/${fileName}`), fileContent);
}

module.exports = {
    saveLocalFile
};