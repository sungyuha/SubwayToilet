import "./ModalHeader.scss"

const ModalHeader = ({onClick, toilet}) => {
    return (
        <div className='modalheader'>
            <div className='modalheader_box'>
                <div className='modalheader_box_close' onClick={onClick}>
                    X
                </div>
                
                <div className='modalheader_box_info'>
                    <div className='modalheader_box_info_box'>
                        <div className='modalheader_box_info_box_line'>
                            {parseInt(toilet.routNm)}
                        </div>
                        <div className='modalheader_box_info_box_title'>
                            {toilet.stinNm}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalHeader;