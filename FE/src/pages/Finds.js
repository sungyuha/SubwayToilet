//import TitleLogoImg from "../Components/TitleLogoImg";
import Find from "../Components/Find";
import "./FindWrap.scss";

const Finds = () => {
    return(
        <div className="finds-wrap">
            <div className='finds-wrap_card'>
                <div className='finds-wrap_card_left'>
                    {/* <TitleLogoImg/> */}
                </div>
                <div className='finds-wrap_card_right'>
                    <Find />
                </div>
            </div>
        </div>
    );
};

export default Finds;