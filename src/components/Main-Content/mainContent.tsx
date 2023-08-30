import { MainContent } from "./main";
import React from 'react';
import "./mainContent.css";
import { Headline } from "../Headline";
import { HomePage } from "./Content/Home/homePage";



interface MainContentProps {
    main: MainContent;
}


const imageDirectory = "../assets/images/";




//const imagePaths = imageFilenames.map(filename => require(`${imageDirectory}${filename}`));


export const MainContentSection: React.FC<MainContentProps> = ({ main }) => {

   


    return (
        <div id="main-content">
            <Headline heading={{ title: "Witch Hunt Out Now" }} subheading="Click Here to Listen" />

            <div id="content">
                {main.page === "home" ? (
                     <HomePage/>
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
};