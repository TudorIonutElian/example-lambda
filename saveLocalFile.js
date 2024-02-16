const fs = require('fs');
const path = require('path');

const saveLocalFile = (filePath, fileContent) => {
    fs.writeFileSync(path.join(__dirname, 'request.txt'), fileContent);
}

module.exports = {
    saveLocalFile
};