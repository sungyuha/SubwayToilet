const { Router } = require('express');
const multer = require("multer");
const path = require("path");
const router = Router();

const boardController = require('../controller/boardController');

const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            console.log(file);
            done(null, 'public/imgUploadFolder/');
        },
        filename(req, file, done){
            function getFullYmdStr(){
                //년월일시분초 문자열 생성
                var d = new Date();
                return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() + " " + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
            }
            done(null, req.body.writer +"_" + getFullYmdStr() + "_" + file.originalname);
            filename = req.body.writer +"_" + getFullYmdStr() + "_" + file.originalname;
        },
    }),
    limits: { fileSize: 10*1024*1024}, //5mb
});


router.get('/', boardController.viewList);
router.get('/get5post', boardController.view5List);
router.get('/view', boardController.viewPost);

router.delete('/view', boardController.deletePost);
router.put('/write', boardController.modifyPost);
router.post('/write', boardController.writePost);
router.post('/write/uploadImg', upload.single('uploadImg'), boardController.uploadImg);
module.exports = router;
