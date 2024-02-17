const fs = require('fs');
const path = require('path');

const saveLocalFile = (fileContent) => {
    if (!fs.existsSync("tmp")){
        fs.mkdirSync("tmp");
    }
    fs.writeFileSync("/tmp/request.txt", fileContent);
}

module.exports = {
    saveLocalFile
};