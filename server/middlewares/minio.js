import * as Minio from 'minio';
import dotenv from 'dotenv'
dotenv.config()

export const minioClient = new Minio.Client({
    endPoint: process.env.ENDPOINT,
    port: parseInt(process.env.PORTMINIO, 10),
    useSSL: process.env.USESSL === 'true',
    accessKey: process.env.ACCESS_KEY,
    secretKey: process.env.SECRET_KEY,
});

export const deleteImagesBokcket = async (bucketName, objectNames) => {
    try {
        const bucketExists = await minioClient.bucketExists(bucketName);
        if (bucketExists && objectNames) {
            if (!Array.isArray(objectNames)) {
                throw new Error('files must be an array');
            }

            await minioClient.removeObjects(bucketName, objectNames);
        }
    } catch (error) {
        console.log(error)
    }
}
export const addImageProduct = async (req, res, next) => {
    const images = req.files
    try {
        if (images.length != 0) {
            const bucketExists = await minioClient.bucketExists(process.env.BEKATENAME);
            if (bucketExists) {
                for (let file of images) {
                    await minioClient.fPutObject(process.env.BEKATENAME, file.filename, file.path)
                }
                next()
            } else {
                await minioClient.makeBucket(process.env.BEKATENAME, 'us-east-1')
                const bucketExists = await minioClient.bucketExists(process.env.BEKATENAME);
                if (bucketExists) {
                    for (let file of images) {
                        await minioClient.fPutObject(process.env.BEKATENAME, file.filename, file.path)

                    }
                    next()
                }
            }
        } else {
            next()
        }
    } catch (error) {
        const objectsToDelete = images?.map(file => file.filename);
        deleteImagesBokcket(process.env.BEKATENAME, objectsToDelete)
        if (error?.code === "ECONNREFUSED" && error?.syscall === "connect") {
            res.status(400).json({ message: "Une erreur est survenu veillez ressayer" })
        } else {
            res.status(500).json(error.message)
        }
    }

}