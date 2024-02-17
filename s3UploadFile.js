const { S3 } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');

const uploadToFirstS3 = async (generateFileContent) => {
    const s3 = new S3({
        region: 'eu-central-1',
        signatureVersion: 'v4',
      });
    
    const uploadParams = {
      Bucket: 'cloudwatch-mock-lambda-bucket',
      Key: Date.now().toString() + '.txt',
      Body: generateFileContent.toString(),
    };
    
    return s3.putObject(uploadParams, (err) => {
        if (err) reject(err);
        resolve(true);
    });
}

module.exports = { uploadToFirstS3 };