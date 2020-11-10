import React, {useContext, useState} from "react";
import './Dashboard.css'
import ArticleCards from "../../components/ArticleCards/ArticleCards";
import Stats from '../../components/Stats/Stats'
import MyEquipment from "../../components/MyEquipment/MyEquipment";
import Reviews from "../../components/Reviews/Reviews";
import Layout from '../../components/shared/Layout/Layout'
import Wishlist from "../../components/Wishlist/Wishlist";
import { LoginUserContext } from "../../components/LoginUser/LoginUserContext"
import { Redirect } from "react-router-dom";

function Dashboard(props) {
  const currentUser = useContext(LoginUserContext)
  const [logOut, setLogOut] = useState(false)

  const handleLogOut = (event) => {
    localStorage.removeItem('localUser')
    setLogOut(true)
  }
  if (logOut) {
    return <Redirect to={'/signin'} />
  }

  return (
    <Layout>
      <div className="content-container">
        <div className="tag-line">
        <h2 className="dashboard-user"> Welcome Back {currentUser.name}</h2>
        <button className="basic-button" id="log-out-button" onClick={handleLogOut}>Log Out</button>
        </div>
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
