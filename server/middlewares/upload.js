import multer from 'multer';


// Configuration du stockage avec multer
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        const safeName = file.originalname.replace(/\s+/g, '-').replace(/[()]/g, '');
        cb(null, Date.now() + '-' + safeName);
    }
});

const upload = multer({ storage });

export default upload;