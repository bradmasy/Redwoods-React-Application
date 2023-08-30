import "./BandLogo.css";
import { Logo } from "./LogoInterface";

interface BandLogoProps {
    logo: Logo;
}

export const BandLogo: React.FC<BandLogoProps> = ({logo}) => {
    return (
        <div id="band-logo">
            <img src={logo.img} alt="band-logo" />
        </div>
    )
}