import "./ModalHeader.scss"

const ModalHeader = ({onClick}) => {
    return (
        <div className='modalheader'>
            <div className='modalheader_box'>
                <div className='modalheader_box_close' onClick={onClick}>
                    X
                </div>
                
                <div className='modalheader_box_info'>
                    <div className='modalheader_box_info_box'>
                        <div className='modalheader_box_info_box_line'>
                            2
                        </div>
                        <div className='modalheader_box_info_box_title'>
                            문래
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalHeader;