import { MenuItem } from "./menuItem";
import "./hamburgerMenu.css";
import xButton from "../../assets/icons/x-button.png";
import { useState } from "react";

interface HamburgerMenuProps {
    img: MenuItem;
    state: boolean;
    setState: (state: boolean) => void;
}



export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ img, state, setState }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const revealMenu = () => {

        let hamburgerButton = document.getElementById("hamburger-set");
        const content = document.getElementById("content");

        if (hamburgerButton && !menuOpen) {
            hamburgerButton.innerHTML = `<img id="x-button" src=${xButton}></img>`
            setMenuOpen(true);
            setState(true);
            if (content) {
          //      content.style.backgroundColor = "black";
            }
            console.log(content)
            console.log(`the state is ${state}`)

        } else if (hamburgerButton && menuOpen) {
            hamburgerButton.innerHTML = `
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            `
            setMenuOpen(false);
            setState(false);
            if (content) {
                //content.style.backgroundColor = "#efaf4d";
            }
            console.log(`the state is ${state}`)

        }

    };

    return (
        <div id="hamburger-menu">
            <div id="align">
                <div id="hamburger-set" onClick={revealMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    )
}