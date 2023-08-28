import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from "../../src/components/Navbar/index";


function App() {
  const links = [
    {
      url: "https://www.google.com",
      content: "Google"
    },
    {
      url: "https://www.facebook.com",
      content: "Facebook"
    },
    {
      url: "https://www.twitter.com",
      content: "Twitter"
    }
  ]

  return (
    <div className="App">
      <Navbar links={links} />
    </div>
  );
}

export default App;
