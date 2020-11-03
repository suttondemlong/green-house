import React from "react";
import './Dashboard.css'
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import Stats from '../../components/Stats/Stats'
import Equipment from "../../components/Equipment/Equipment";
import Reviews from "../../components/Reviews/Reviews";
import Layout from '../../components/shared/Layout/Layout'
import Wishlist from "../../components/Wishlist/Wishlist";

function Dashboard(props) {
  return (
    <Layout>
      <div className="content-container">
        <h2 className="dashboard-user">Welcome Back Sherie</h2>
        <hr className="general-hr"></hr>
        <Stats />
        <hr className="general-hr"></hr>
        <Equipment />
        <hr className="general-hr"></hr>
        <Wishlist />
        <hr className="general-hr"></hr>
        <Reviews />
        <hr className="general-hr"></hr>
        <ArticleCards />
      </div>
    </Layout>
  );
}

export default Dashboard;
