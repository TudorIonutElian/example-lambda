const { generateFileContent } = require('./generateFileContent');
const { uploadToFirstS3 } = require('./s3UploadFile');
const { saveLocalFile } = require('./saveLocalFile');
const path = require('path');

exports.handler = async (event) => {
    // Your Lambda function logic here
  
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
      message: JSON.stringify(event),
      // Add more data as needed
    })
  };

  const generatedFileContent = generateFileContent(event);
  //saveLocalFile(path.join(`${__dirname}/tmp`, 'request.txt'), generatedFileContent);


  await uploadToFirstS3(generatedFileContent);
  return response;
};