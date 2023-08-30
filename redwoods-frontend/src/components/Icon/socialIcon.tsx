import {Icon} from './iconInterface';
import "./icon.css";

interface SocialIconProps {
    icon: Icon;
}

const redirect = (url: string): void => {
    window.location.href = url;
}

export const SocialIcon: React.FC<SocialIconProps> = ({icon}) => {
    return (
        <div id="social-icon">
            <img src={icon.img} alt="social-icon" onClick={()=> redirect(icon.url)}/>
        </div>
    )
}