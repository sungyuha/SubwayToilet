const { Router } = require('express');
const multer = require("multer");
const path = require("path");
const router = Router();

const suggestController = require('../controller/suggestController');

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


router.get('/', suggestController.viewList);
router.get('/get5post', suggestController.view5List);
router.get('/view', suggestController.viewPost);
router.get('/getMyPost', suggestController.getMyPost);
router.delete('/view', suggestController.deletePost);
router.get('/write', suggestController.checkID);
router.put('/write', suggestController.modifyPost);
router.post('/write', suggestController.writePost);
router.post('/write/uploadImg', upload.single('uploadImg'), suggestController.uploadImg);
module.exports = router;
