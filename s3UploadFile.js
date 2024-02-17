const { S3 } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

const uploadToFirstS3 = async (generateFileContent) => {
    const s3 = new S3({
        region: 'eu-central-1',
        signatureVersion: 'v4',
      });

    const syncFileToS3 = (passThroughStream) => (new Promise((resolve, reject) => {
        const uploadParams = {
            Bucket: 'cloudwatch-mock-lambda-bucket',
            Key: Date.now().toString() + '.txt',
            Body: generateFileContent.toString(),
        };

        s3.putObject(uploadParams, (err) => {
          if (err) reject(err);
          resolve(true);
        });
        }
      )
    );
    
    return await syncFileToS3(fs.createReadStream(path.join(__dirname, 'request.txt')));
}

module.exports = { uploadToFirstS3 };