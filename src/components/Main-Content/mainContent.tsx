import { MainContent } from "./main";
import React from 'react';
import "./mainContent.css";
import { useState } from "react";
import { Headline } from "../Headline";
import { HomePage } from "./Content/Home/homePage";
import { MobileMenu } from "./Mobile-Menu";


interface MainContentProps {
    main: MainContent;
    mobileState: boolean;
    setMobileState: (state: boolean) => void;
}

const options = [
    "HOME",
    "THE BOYS",
    "MERCH",
    "MEDIA",
    "DATES",
    "CONTACT"

]

export const MainContentSection: React.FC<MainContentProps> = ({ main, mobileState, setMobileState }) => {

    // const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(true);

    if (mobileState) {
        return (
            <div id="main-content">
                <Headline heading={{ title: "Witch Hunt Out Now" }} subheading="Click Here to Listen" />

                <div id="content">
                   <MobileMenu options={options}/>

                </div>
            </div>
        )
    }
    else {
        return (
            <div id="main-content">
                <Headline heading={{ title: "Witch Hunt Out Now" }} subheading="Click Here to Listen" />

                <div id="content">
                    {main.page === "home" ? (
                        <HomePage />
                        //  <div>Render content for home page</div>
                    ) : main.page === "about" ? (
                        <div>Render content for about page</div>
                    ) : main.page === "contact" ? (
                        <div>Render content for contact page</div>
                    ) : (
                        <div>Render content for other pages</div>
                    )}
                </div>
            </div>
        );
    }
};