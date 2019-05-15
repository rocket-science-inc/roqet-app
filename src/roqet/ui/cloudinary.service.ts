import env from "react-native-config";
import cloudinary from "cloudinary-core";

const CloudinaryService = cloudinary.Cloudinary.new({
    cloud_name: env.CLOUDINARY_CLOUD_NAME
});

export { CloudinaryService };