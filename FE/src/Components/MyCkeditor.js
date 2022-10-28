import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import axios from 'axios';
const MyCkeditor = (props) => {
    const UPLOAD_URL = 'http://localhost:8000/page-notice/write/uploadImg';
    function uploadAdaptor(loader){
        return{
            upload : () => {
                const config = {
                    header: { 'content-type': 'multipart/form-data' },
                };
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    loader.file.then((file) => {
                        console.log(file);
                        formData.append("uploadImg", file);
                        axios.post(UPLOAD_URL, formData, config)
                        .then((result) => {
                            console.log(result.data);
                        }).catch((err) => {
                            console.log('failure!');
                        });
                    })
                })
            }
        }
    }
    function uploadPlugin(editor){
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdaptor(loader);
        }
    }
    return (
        <div className="ckeditor-wrap">
            <CKEditor
                config={{
                    extraPlugins: [uploadPlugin]
                }}
                editor={ Editor }
                data={props.addData}
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    props.setAddData(data);
                    console.log(data);
                } }
                onBlur={ ( event, editor ) => {
                    // console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    // console.log( 'Focus.', editor );
                } }
            />
        </div>
    );
    
}

export default MyCkeditor;