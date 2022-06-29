import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET ,
    secure: true
})


const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'aenima',
    use_filename: true
  })
}

  const deleteImagen = async (publicId) => {
    return await cloudinary.uploader.destroy(publicId)
  }

module.exports = {
    uploadImage,
    deleteImagen
}



