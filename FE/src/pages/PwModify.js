import Modify from "../Components/Modify";
import "./PwModifyWrap.scss";

const PwModify = () => {
    return(
        <div className="pwmodify-wrap">
            <div className='pwmodify-wrap_card'>
                <div className='pwmodify-wrap_card_left'>
                    {/* <TitleLogoImg/> */}
                </div>
                <div className='pwmodify-wrap_card_right'>
                    <Modify />
                </div>
            </div>
        </div>
    );
};

export default PwModify;