import { MainContent } from "./main";
import React from 'react';
import "./mainContent.css";
import { Headline } from "../Headline";


interface MainContentProps {
    main: MainContent;
}

export const MainContentSection: React.FC<MainContentProps> = ({ main }) => (

    <div id="main-content">
        <Headline heading={{title:"Witch Hunt Out Now"}} subheading="Click Here to Listen" />

        <div id="content">
            {main.page === "home" ? (

                <div>Render content for home page</div>
            ) : main.page === "about" ? (
                <div>Render content for about page</div>
            ) : main.page === "contact" ? (
                <div>Render content for contact page</div>
            ) : (
                <div>Render content for other pages</div>
            )}
        </div>
    </div>
)