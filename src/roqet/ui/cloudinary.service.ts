import env from "react-native-config";

const CloudinaryService = require("cloudinary").v2;

CloudinaryService.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME, 
    api_key: env.CLOUDINARY_API_KEY, 
    api_secret: env.CLOUDINARY_API_SECRET
});

export { CloudinaryService };