import imagekit from '../config/imagekit.js'
import fs from 'fs'

export const addBlog = async (req,res) => {
    try {
        const {title, description, category, isPublished} = JSON.parse (req.body.blog);
        const imageFile = req.file;

        //check if fields are present
        if (!title || !description || !category || !imageFile) {
            return res.json({success: false, message: "Missing required fields"})
        }

        const fileBuffer = fs.redFileSync(imageFile.Path)

        //Upload Image to Imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.orinalname,
            folder: "/blogs"
        })

        // Optimization through imagekit URL Transformation
        const optimizedImageUrl = imagekit.url({
            path: response.filepath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        });

        const image = optimizedImageUrl;
         await Blog.create({title, subTitle, description, category, image, isPublished})

         res.json({success: false, message: error.message})

        

    } catch (error) {
        
    } 
}