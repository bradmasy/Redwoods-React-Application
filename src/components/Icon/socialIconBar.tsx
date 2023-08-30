import { SocialIcon } from "./socialIcon";
import "./socialIconBar.css";

interface SocialIconBarProps {
    icons: Array<{ url: string; img: string }>;
}

export const SocialIconBar: React.FC<SocialIconBarProps> = ({ icons }) => {
    return (
        <div id="social-icon-bar">
            {icons.map((link, index) => (
                <SocialIcon key={index} icon={link} />
            ))}
        </div>
    )
}