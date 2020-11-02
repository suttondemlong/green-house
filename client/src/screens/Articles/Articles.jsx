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
  const articlesJSX = articles.map((post, index) => (
    <Article
      _id={post._id}
      title={post.title}
      imgURL={post.imgURL}
      content={post.content}
      author={post.author}
      key={index}
    />
  ));
 
  return (
    <Layout>
      <Link to="/add-article" className="add-article">
        <h2>Add Article</h2>
        </Link>
      <div className="articles">{articlesJSX}</div>
    </Layout>
  );
}


export default Articles;