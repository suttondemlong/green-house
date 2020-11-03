import React, { useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom"
import "./ArticleCards.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { getArticles } from "../../services/articles";

const  ArticleCards =(props) => {
  const [articles, setArticles] = useState([])
  
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles();
      setArticles(articles)
    }
    fetchArticles()
  }, [])
  

    const CARDS = articles
      .reverse()
      .map((article, index) =>
        index < 8 ? (
          <ArticleCard
            _id={article._id}
            title={article.title}
            imgURL={article.imgURL}
            key={index}
          />
        ) : null
      );

  return (
    <>
    <div className='reading'>
    <h2>{(props.match.path === '/dashboard') ? "Saved Articles" : "What people are reading" }</h2>
      <div className="article-cards">
        <div className="cards">{CARDS}</div>
        </div>
        <Link to="/articles">
      <button className="seemore-button">
            See All
        </button>
        </Link>
      </div>
      </>
    );
  }


export default withRouter(ArticleCards);
