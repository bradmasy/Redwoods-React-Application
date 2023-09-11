import { MainContent } from "./main";
import React from 'react';
import "./mainContent.css";
import { useState } from "react";
import { Headline } from "../Headline";
import { HomePage } from "./Content/Home/homePage";
import { MobileMenu } from "./Mobile-Menu";
import { TheBoysPage } from "./Content/The-Boys/theBoysPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MerchPage } from "./Content/Merch/merchPage";
import { DatesPage } from "./Content/Dates/index";

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

const dates = [
    {
        date: "FRIDAY, OCT 23RD",
        location: "The Fox Theater",
        city: "Vancouver, BC",
        ticketLink: "https://www.eventbrite.com/e/158149156229"
    },
    {
        date: "FRIDAY, OCT 23RD",
        location: "The Fox Theater",
        city: "Vancouver, BC",
        ticketLink: "https://www.eventbrite.com/e/158149156229"
    },
    {
        date: "FRIDAY, OCT 23RD",
        location: "The Fox Theater",
        city: "Vancouver, BC",
        ticketLink: "https://www.eventbrite.com/e/158149156229"
    },
    {
        date: "FRIDAY, OCT 23RD",
        location: "The Fox Theater",
        city: "Vancouver, BC",
        ticketLink: "https://www.eventbrite.com/e/158149156229"
    },
    {
        date: "FRIDAY, OCT 23RD",
        location: "The Fox Theater",
        city: "Vancouver, BC",
        ticketLink: "https://www.eventbrite.com/e/158149156229"
    },
    {
        date: "FRIDAY, OCT 23RD",
        location: "The Fox Theater",
        city: "Vancouver, BC",
        ticketLink: "https://www.eventbrite.com/e/158149156229"
    }
]


export const MainContentSection: React.FC<MainContentProps> = ({ main, mobileState, setMobileState }) => {
    console.log(main)
    if (mobileState) {
        console.log("MOBILE")
        return (
            <div id="main-content">
                <Headline heading={{ title: "Witch Hunt Out Now" }} subheading="Click Here to Listen" />

                <div id="content">
                    <MobileMenu options={options} />
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="main-content">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<TheBoysPage />} />
                        <Route path="/merch" element={<MerchPage />} />
                        <Route path="/media" element={<HomePage/>}/>
                        <Route path="/dates" element={<DatesPage dates={dates}/>}/>
                        <Route path="/contact" element={<HomePage/>}/>
                    </Routes>
                </Router>
            </div>

        );
    }
};