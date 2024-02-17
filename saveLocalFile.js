const fs = require('fs');
const path = require('path');

const saveLocalFile = (filePath, fileContent) => {
    fs.writeFileSync(filePath, fileContent);
}

module.exports = {
    saveLocalFile
};