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

import { MainContentSection } from '../components/Main-Content/mainContent';

function App() {
  const linksLeft = [
    {
      url: "/",
      content: "HOME"
    },
    {
      url: "https://www.facebook.com",
      content: "THE BOYS"
    },
    {
      url: "https://www.twitter.com",
      content: "MERCH"
    }
  ]

  const linksRight = [
    {
      url: "/",
      content: "MEDIA"
    },
    {
      url: "https://www.facebook.com",
      content: "DATES"
    },
    {
      url: "https://www.twitter.com",
      content: "CONTACT"
    }
  ]


  const socialLinks = [
    {
      url: "https://www.facebook.com",
      img: facebook
    },
    {
      url: "https://www.instagram.com",
      img: instagram
    },
    {
      url: "https://www.twitter.com",
      img: twitter
    },
    {
      url: "https://www.youtube.com",
      img: youtube
    },
    {
      url: "https://www.music.com",
      img: music
    }
  ]


  const [page, setPage] = useState({
    page: "home"
  });

  return (
    <div className="App">
      <Navbar linksLeft={linksLeft} linksRight={linksRight} icons={socialLinks} />
      <MainContentSection main={page} />
    </div>



  );
}

export default App;
