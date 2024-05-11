// import DocThumbnail from "../assets/images/doc.png";
// import ImgThumbnail from "../assets/images/img.png";
// import VideoThumbnail from "../assets/images/video.png";

//utils functions

// export const getFileThumbnail = (type) => {
//   if (type?.includes("image")) {
//     return ImgThumbnail;
//   }
//   if (type?.includes("video")) {
//     return VideoThumbnail;
//   }

//   return DocThumbnail;
// };

export const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

export const validateFullName = (name) => {
  const regex = /^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/;
  return regex.test(String(name).toLowerCase());
};

export const getStorageItem = async (key) => {
  try {
    let item = await localStorage.getItem(key);
    return item ? JSON.parse(item) : item;
  } catch (e) {
    console.log("Error in getting key -->", e);
    return null;
  }
};

export const setStorageItem = async (key, value) => {
  try {
    let item = await localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log("Error in setting key -->", e);
    return null;
  }
};


export const isResolutionAbove1360x768 = () => {
  // Get the screen resolution
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;

  // Check if both width and height are above 1360x768
  return screenWidth > 1360 && screenHeight > 768;
};



// export const uploadFileToBucket = async (url, file) => {
//   try {
//     console.log("File", file, `${url}${file.name?.replace(" ", "")}`);
//     const bucket = import.meta.env.VITE_BUCKET_NAME;
//     const key = `${url}${file.name?.replace(" ", "")}`;
//     const s3 = new S3Client({
//       region: "ams3", // AWS region
//       endpoint: `https://ams3.digitaloceanspaces.com`, // Full URL without the bucket name
//       credentials: {
//         accessKeyId: import.meta.env.VITE_ACCESS_KEY,
//         secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
//       },
//     });

//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();

//       fileReader.onload = async () => {
//         try {
//           const arrayBuffer = fileReader.result;
//           const params = {
//             Bucket: bucket,
//             Key: key,
//             Body: arrayBuffer,
//             ACL: "public-read",
//           };

//           const command = new PutObjectCommand(params);
//           await s3.send(command);

//           const s3ObjectUrl = `https://${bucket}.ams3.digitaloceanspaces.com/${params.Key}`;
//           console.log("response from bucket after uploading ", s3ObjectUrl);

//           resolve(s3ObjectUrl);
//         } catch (uploadError) {
//           console.error("Error uploading file:", uploadError);
//           enqueueSnackbar(`Error in uploading file`, {
//             autoHideDuration: 3000,
//             variant: "warning",
//           });
//           reject(uploadError);
//         }
//       };

//       fileReader.onerror = (error) => {
//         console.error("Error reading file:", error);
//         reject(error);
//       };

//       fileReader.readAsArrayBuffer(file);
//     });
//   } catch (error) {
//     console.error("Error uploading logo:", error);
//     throw error;
//   }
// };
