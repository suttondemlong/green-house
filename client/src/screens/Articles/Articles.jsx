import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import "./Articles.css";
import { getArticles } from "../../services/articles";
import Layout from '../../components/shared/Layout/Layout';
import Article from "../../components/Article/Article"


function Articles(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticles()
      setArticles(articles)
    }
   fetchArticles()
  }, [])
  const articlesJSX = articles.map((article, index) => (
    <Article
      _id={article._id}
      title={article.title}
      imgURL={article.imgURL}
      content={article.content}
      author={article.author}
      key={index}
    />
  ));
 
  return (
    <Layout>
      <Link to="/add-article" className="add-article">
      <button className="seemore-button">
            Add Article
        </button>
        </Link>
      <div className="articles">{articlesJSX}</div>
    </Layout>
  );
}


export default Articles;