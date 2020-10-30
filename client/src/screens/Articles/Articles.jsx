import React, { useState, useEffect } from 'react';
import "./Articles.css";
import { getArticles } from "../../services/articles";


function Articles(props) {
  // const [items, setItems] = useState([])
  const [articles, setArticles] = useState([])

//async await move line 14 above 12
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles()
      setArticles(articles)
    }
   fetchArticles()
  }, [])
 
  console.log(articles)
  console.log(articles[0])


  return (
    <div className="article-carousel">
      <h2>What People Are Reading</h2>
      <div className="articles">
        {articles.map((articles) => (
          <img className="article-img" src={articles.imgURL} alt="Article" />))}
      </div>
    </div>
  );
}


export default Articles;