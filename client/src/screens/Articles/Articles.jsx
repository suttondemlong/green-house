import React, { useState, useEffect } from 'react';
import "./Articles.css";
import { getArticles } from "../../services/articles";


function Articles(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const response = getArticles();
  })

  setArticles(response)

  return (
    <div className="article-carousel">
      <h2>What People Are Reading</h2>
      <div className="">
        {articles.map((articles) => (
          <img src={articles.imgURL} alt="Article" />))}
      </div>
    </div>
  );
}

export default Articles;