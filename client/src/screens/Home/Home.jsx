import React from 'react';
import Articles from '../Articles/Articles'
import Buying from '../../components/Buying/Buying'
import ChatHomePage from '../../components/ChatHomePage/ChatHomePage'
import Directions from '../../components/Directions/Directions';
import HomeImage from "../../components/HomeImage/HomeImage"
import Nav from "../../components/shared/Nav/Nav"
import Footer from "../../components/shared/Footer/Footer"
import './Home.css';

function Home(props) {
  return (
    <div>
      <Nav />
      <div className="content-container">
        <HomeImage />
        <Directions />
        <ChatHomePage />
        <Articles />
        <Buying />
      </div>
      <Footer />
    </div>
  );
}

export default Home;