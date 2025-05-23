import multer from "multer";
import upload from "./upload.js";
import { deleteImagesBokcket } from "./minio.js";
import dotenv from 'dotenv'
dotenv.config()


export const uploadImageProd = (req, res, next) => {
    upload.array('images', 6)(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            if (err.code == "LIMIT_UNEXPECTED_FILE") {
                res.status(400).json({ message: "Au maximum 6 images" });
            }
        } else if (err) {
            res.status(500).json({ error: `Erreur serveur : ${err.message}` });
        } else {
            next()
        }
    });
}
export const propsImage = async (req, res, next) => {
    try {
        const imagePaths = req.files.map(file => {
            const images = file.path.split("/")
            return file.path.split("/")[images.length - 1]
        });
        const images = req.files?.find((image) => {
            const size = (image?.size / 1024) > (2 * 1024)
            if (size) {
                return true

            } else {
                return false
            }
        })
        if (images) {
            deleteImagesBokcket(process.env.BEKATENAME, imagePaths)
            res.status(400).json({ message: "La taille de l'image ne doit pas depassé 2Mo" });
        } else {
            next()
        }
    } catch (error) {
        deleteImagesBokcket(process.env.BEKATENAME, imagePaths)
        res.status(500).json({ error: `Erreur serveur : ${err.message}` });
    }
}