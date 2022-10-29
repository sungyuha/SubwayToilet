import DOMPurify from "dompurify";


const ReactInnerHTML = (props) => {
    const sanitizer = DOMPurify.sanitize;
    return(
        <div dangerouslySetInnerHTML={{__html: sanitizer(props.data)}}></div>
    )
}

export default ReactInnerHTML;