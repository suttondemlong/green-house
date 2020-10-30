import React from 'react';
import Buying from '../../components/Buying/Buying'
import ChatHomePage from '../../components/ChatHomePage/ChatHomePage'
import Directions from '../../components/Directions/Directions';
import HomeImage from "../../components/HomeImage/HomeImage"
import Layout from '../../components/shared/Layout/Layout'
import './Home.css';

function Home(props) {
  return (
    <Layout>
      <div>
        <div className="content-container">
          <HomeImage />
          <Directions />
          <ChatHomePage />
          <Buying />
        </div>
      </div>
    </Layout>
  );
}

export default Home;