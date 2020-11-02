import React from "react"
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Home from "./screens/Home/Home";
import Articles from "./screens/Articles/Articles"
import ArticleCreate from "./screens/ArticleCreate/ArticleCreate"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/add-article" component={ArticleCreate} />
      </Switch>
    </div>
  );
}

export default App;
