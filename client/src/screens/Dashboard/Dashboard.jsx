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
        <Stats/>
        <Equipment />
        <Wishlist />
        <Reviews />
        <ArticleCards />
      </div>
    </Layout>
  );
}

export default Dashboard;
