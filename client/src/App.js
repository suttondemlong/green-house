import React from "react"
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from "./screens/Home/Home";
import Articles from "./screens/Articles/Articles"
import ArticleCreate from "./screens/ArticleCreate/ArticleCreate";
import ArticleDetail from "./screens/ArticleDetail/ArticleDetail";
import ArticleEdit from "./screens/ArticleEdit/ArticleEdit"
import Dashboard from "./screens/Dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/add-article" component={ArticleCreate} />
        <Route exact path="/articles/:id/edit" component={ArticleEdit} />
        <Route exact path="/articles/:id" component={ArticleDetail} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
