import React, {useContext} from "react";
import './Dashboard.css'
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import Stats from '../../components/Stats/Stats'
import MyEquipment from "../../components/MyEquipment/MyEquipment";
import Reviews from "../../components/Reviews/Reviews";
import Layout from '../../components/shared/Layout/Layout'
import Wishlist from "../../components/Wishlist/Wishlist";
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"

function Dashboard(props) {
  const [currentUser] = useContext(LoginUserContext)
  // console.log(currentUser)
  return (
    <Layout>
      <div className="content-container">
        <h2 className="dashboard-user"> Welcome Back {currentUser.name}</h2>
        <hr className="general-hr"></hr>
        <Stats />
        <hr className="general-hr"></hr>
        <MyEquipment />
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
