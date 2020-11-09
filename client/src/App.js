import React /*{useEffect}*/ from "react"
import {Route, Switch} from 'react-router-dom'
import './App.css';
// import {getUser} from "../src/services/users"
import Home from "./screens/Home/Home";
import Articles from "./screens/Articles/Articles"
import ArticleCreate from "./screens/ArticleCreate/ArticleCreate";
import ArticleDetail from "./screens/ArticleDetail/ArticleDetail";
import ArticleEdit from "./screens/ArticleEdit/ArticleEdit"
import Dashboard from "./screens/Dashboard/Dashboard"
import MyEquipment from "./screens/MyEquipment/MyEquipment"
import MyAccount from "./screens/MyAccount/MyAccount"
import EquipmentDetail from "./screens/EquipmentDetail/EquipmentDetail"
import Equipments from "./screens/Equipments/Equipments";
import SimilarItems from "./screens/SimilarItems/SimilarItems"
import UserSignUp from "./screens/UserSignUp/UserSignUp"
import Login from "./screens/Login/Login"
import {LoginUserProvider} from "./components/LoginUser/LoginUserContext"
import EditUserInfo from "./screens/EditUserInfo/EditUserInfo";

function App() {
    
  return (
    <LoginUserProvider>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/add-article" component={ArticleCreate} />
        <Route exact path="/articles/:id/edit" component={ArticleEdit} />
        <Route exact path="/articles/:id" component={ArticleDetail} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/myequipment" component={MyEquipment}/>
        <Route exact path="/MyAccount" component={MyAccount} />
        <Route exact path="/equipments/:id/detail" component={EquipmentDetail} />
        <Route exact path='/equipments' component={Equipments} />
        <Route exact path='/similaritems' component={SimilarItems} />
        <Route exact path='/signup' component={UserSignUp} />
        <Route exact path='/signin' component={Login} />
        <Route exact path='/edituserinfo' component={EditUserInfo} /> 
      </Switch>
    </div>
    </LoginUserProvider>
  );
}

export default App;
