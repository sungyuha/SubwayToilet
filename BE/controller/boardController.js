const Notice = require('../models/notice');

exports.noticeWrite = async (req, res) => {
    const { writer, title, content } = req.body;
    const object = {
        writer,
        title,
        content,
        date : Date.now()
      };
    const writeInfo = new Notice(object);
    await writeInfo.save();
    res.send('글작성 완료');
}


exports.uploadImg = (req,  res) => {
    res.send('이미지 업로드!');
}
exports.viewList = async (req, res) => {
    
    

    const notices = await Notice.find().sort({date: 'desc'});
    res.send(notices);
}


