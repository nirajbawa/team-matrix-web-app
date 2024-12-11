import { cloudinary } from "./cloudinary"; // your config path

const uploadToCloudinary = (
  fileUri: string,
  fileName: string
): Promise<any> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        resource_type: "auto",
        folder: "/team-matrix/", 
        timeout: 120000, 
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};

export default uploadToCloudinary;
