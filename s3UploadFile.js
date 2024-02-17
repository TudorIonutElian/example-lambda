const { S3 } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

const uploadToFirstS3 = async (generateFileContent) => {
    const s3 = new S3({
        /* Local rules for AWS credentials
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
        */
        region: 'eu-central-1',
        signatureVersion: 'v4',
      });
    
    const uploadToFirstS3 = (passThroughStream) => (new Promise((resolve, reject) => {
    const uploadParams = {
        Bucket: 'cloudwatch-mock-lambda-bucket',
        Key: Date.now().toString() + '.txt',
        Body: generateFileContent.toString(),
    };
    s3.putObject(uploadParams, (err) => {
        if (err) reject(err);
        resolve(true);
    });
    }));

    return await uploadToFirstS3(fs.createReadStream(path.join(__dirname, 'request.txt')));
}

module.exports = { uploadToFirstS3 };