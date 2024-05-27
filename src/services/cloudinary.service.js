import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
    cloud_name: process.env.CLOUNDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUNDINARY_API_ID, 
    api_secret: process.env.CLOUNDINARY_API_SECRET
  });

const uploadCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) {
            console.log('Local file path not found..!')
            return null
        }
        const uploadResponse  = await cloudinary.uploader.upload(localFilePath, 
            {
                resource_type: 'auto'
            }
        )
        console.log(`File upload successfully ${uploadResponse.url}`)
        return uploadResponse;
    }catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
} 

export default uploadCloudinary