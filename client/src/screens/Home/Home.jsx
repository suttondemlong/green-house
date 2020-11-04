import React from 'react';
import Buying from '../../components/Buying/Buying'
import ChatHomePage from '../../components/ChatHomePage/ChatHomePage'
import Directions from '../../components/Directions/Directions';
import HomeImage from "../../components/HomeImage/HomeImage"
import Layout from '../../components/shared/Layout/Layout'
import './Home.css';
import ArticleCards from '../../components/ArticleCards/ArticleCards';

function Home(props) {
  return (
    <Layout>
      <div>
        <div className="content-container">
          <HomeImage />
          <Directions />
          <hr className="general-hr"></hr>
          <ChatHomePage />
          <hr className="general-hr"></hr>
          <ArticleCards />
          <hr className="general-hr"></hr>
          <Buying />
        </div>
      </div>
    </Layout>
  );
}

export default Home;