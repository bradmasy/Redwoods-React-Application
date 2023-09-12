import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "../components/Navbar/Navbar";
import { useState } from "react";
import facebook from "../assets/icons/facebook.png"//"../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import youtube from "../assets/icons/youtube.png";
import music from "../assets/icons/spotify.png";
import { HomePage } from '../components/Main-Content/Content/Home/homePage';
import { MainContentSection } from '../components/Main-Content/mainContent';
import { BrowserRouter as Router, Routes, Route, Link, useParams,useLocation } from "react-router-dom";

const reactRouterDom = require("react-router-dom");


function App() {
  const linksLeft = [
    {
      url: "/",
      content: "HOME"
    },
    {
      url: "/about",
      content: "THE BOYS"
    },
    {
      url: "/merch",
      content: "MERCH"
    }
  ]

  const linksRight = [
    {
      url: "/media",
      content: "MEDIA"
    },
    {
      url: "/dates",
      content: "DATES"
    },
    {
      url: "/contact",
      content: "CONTACT"
    }
  ]


  const socialLinks = [
    {
      url: "https://www.facebook.com/RedwoodsVancouver",
      img: facebook
    },
    {
      url: "https://www.instagram.com/redwoodsvancouver",
      img: instagram
    },
    {
      url: "https://www.twitter.com/RedwoodsVan",
      img: twitter
    },
    {
      url: "https://www.youtube.com/@redwoodsvancouver7599",
      img: youtube
    },
    {
      url: "https://open.spotify.com/artist/3uTxIW6v8i9yJTuKGvxRlI",
      img: music
    }
  ]


  const [page, setPage] = useState({
    page: "home", url: "/"
  });

  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="App">
      <Navbar linksLeft={linksLeft} linksRight={linksRight} icons={socialLinks} isMobile={isMobile} setMobileState={setIsMobile} setPage={setPage} />
      <MainContentSection main={page} mobileState={isMobile} setMobileState={setIsMobile} />
    </div>



  );
}

export default App;
