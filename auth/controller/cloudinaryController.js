const Image = require("../model/imageModel");
const cloudinary = require("../config/cloudinary");
const { uploadCloudinary } = require("../helper/cloudinary-helper");


const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }
        const {url,publicId}= await uploadCloudinary(req.file.path);

        const newImage = new Image({
            url,
            publicId,
            uploadedBy: req.userData.id
        });
        await newImage.save();
        return res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            data: newImage
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
        
    }
}

const deleteImage = async (req, res) => {
    try {
        const { publicId } = req.params;
        const image = await Image.findOne({ publicId });
        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found"
            });
        }
        await cloudinary.uploader.destroy(publicId);
        await Image.deleteOne({ publicId });
        return res.status(200).json({
            success: true,
            message: "Image deleted successfully"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }
}
const getAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        return res.status(200).json({
            success: true,
            message: "Images fetched successfully",
            data: images
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }
}
const getImageById = async (req, res) => {
    try {
        const { id } = req.params;
        const image = await Image.findById(id);
        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Image fetched successfully",
            data: image
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }
}

const updateImage = async (req, res) => {   
    try {
        const { id } = req.params;
        const image = await Image.findById(id);
        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found"
            });
        }
        const { url, publicId } = await uploadCloudinary(req.file.path);
        image.url = url;
        image.publicId = publicId;
        await image.save();
        return res.status(200).json({
            success: true,
            message: "Image updated successfully",
            data: image
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error
        });
    }
}

module.exports = {
    uploadImage,
    deleteImage,
    getAllImages,
    getImageById,
    updateImage
}