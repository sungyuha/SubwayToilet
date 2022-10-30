const Notice = require('../models/notice');

exports.writePost = async (req, res) => {
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
exports.modifyPost = async (req, res) => {
    const { writer, title, content, _id } = req.body;
    const object = {
        writer,
        title,
        content
      };
    const result = await Notice.findOneAndUpdate({_id: _id}, object);
    res.send(result);
}


exports.uploadImg = (req,  res) => {
    console.log(req.file);
    res.status(200).json({
        uploaded: true,
        url: `http://localhost:8000/imgUploadFolder/${req.file.filename}`,

    })
}
exports.viewList = async (req, res) => {
    
    const notices = await Notice.find().sort({date: 'desc'});
    res.send(notices);
}

exports.viewPost = async (req, res) => {
    // console.log(req);
    const post = await Notice.findOne({ _id: req.query.postId });
    res.send(post);
}




exports.deletePost = async (req, res) => {
    // console.log(req.body.postId);
    const deleted = await Notice.findByIdAndDelete(req.body.postId);
    res.send(deleted);
}
