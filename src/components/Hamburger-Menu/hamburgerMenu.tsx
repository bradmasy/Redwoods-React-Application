import { MenuItem } from "./menuItem";
import "./hamburgerMenu.css";

interface HamburgerMenuProps {
    menuItems: MenuItem;
}



export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuItems }) => (
    <div id="hamburger-menu">
        <div id="align">
            <div id="hamburger-set">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    </div>
)