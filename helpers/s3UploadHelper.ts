import AWS from "aws-sdk";
import { config } from "@config/s3Config";

AWS.config.update({
  accessKeyId: config.accessKeyID,
  secretAccessKey: config.secretAccessKey,
});

const myBucket = new AWS.S3({
  params: { Bucket: config.bucketName },
  region: config.region,
});

const putObjectWrapper = (params) => {
  return new Promise((resolve, reject) => {
    myBucket.putObject(params, function (err, result) {
      if (err) reject(err);
      if (result) resolve(result);
    });
  });
};

export const submitOnProfileImage = async ({
  profileImage,
  id,
}: {
  profileImage: any;
  id: string;
}) => {
  try {
    if (profileImage) {
      putObjectWrapper({
        Body: profileImage,
        Bucket: config.bucketName,
        Key: `profile/${id}`,
      })
        .then((r) => {
          console.log(r);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  } catch (e) {
    console.log(e);
  }
};
