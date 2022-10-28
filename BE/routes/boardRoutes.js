const { Router } = require('express');
const multer = require("multer");
const router = Router();

const boardController = require('../controller/boardController');

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            console.log(file);
            done(null, 'imgUploadFolder/');
        },
        filename(req, file, done){
            done(null, `${Date.now()}_${file.originalname}`);
        },
    }),
    limits: { fileSize: 10*1024*1024}, //5mb
});

router.post('/write/uploadImg', upload.single('uploadImg'), boardController.uploadImg);
module.exports = router;
