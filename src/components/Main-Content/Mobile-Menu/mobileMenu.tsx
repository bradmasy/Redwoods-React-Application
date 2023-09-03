
import React from 'react';
import "./mobileMenu.css"

interface MobileMenuProps {
    options: Array<string>;

}

export const MobileMenu: React.FC<MobileMenuProps> = ({ options }) => {

    const redirectToPage = (e: Event) => {


    }

    return (
        <div className="mobile-menu">
            <div id="align-menu-x">
                <div id="align-menu-y">
                    {options.map((option, index) => (
                        <div className="menu-option" key={index}>
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