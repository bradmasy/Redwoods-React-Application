
import React from 'react';
import "./mobileMenu.css"

interface MobileMenuProps {
    options: Array<string>;

}

export const MobileMenu: React.FC<MobileMenuProps> = ({ options }) => {

    const redirectToPage = (option:string) => {
        console.log(option)
        let text:string = option.toLowerCase();
        
        if(text === "home"){
            text = "";
        }
        else if(text === "the boys"){
            text = "about";
        }
        else if(text === "merch"){ //TODO: Change this to merch, merch page under construction
            text = "";
        }

        window.location.href = `/${text}`;
    }

    return (
        <div className="mobile-menu">
            <div id="align-menu-x">
                <div id="align-menu-y">
                    {options.map((option, index) => (
                        <div className="menu-option" key={index} onClick={()=>redirectToPage(option)}>
                            <div className="option-name"> 
                               {option}
                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>



        </div>
    )
}