import axios from "axios";

const Upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "coupons");
  data.append("cloud_name","ddho8twg3");

  try {
    const cloudinaryUploadEndpoint = 'https://api.cloudinary.com/v1_1/ddho8twg3/image/upload'; // Replace with your actual Cloudinary cloud name
    const res = await axios.post(cloudinaryUploadEndpoint, data);
    // const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default Upload;