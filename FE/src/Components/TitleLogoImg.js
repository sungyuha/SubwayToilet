import mainIMG from "../images/MAIN.png";
import "./TitleLogoImg.scss"

const TitleLogoImg = () => {
    
    return(
        <div >
            <img className="LogoImg" src={mainIMG}/>
        </div>
    );
}

export default TitleLogoImg;