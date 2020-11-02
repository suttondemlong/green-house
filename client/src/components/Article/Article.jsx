import React from "react";
import "./Article.css";
import { Link } from "react-router-dom";

const Article = (props) => {
  return (
    <>
      <Link className="article" to={`/articles/${props._id}`}>
        <div className="crop">
        <img className="article-image" src={props.imgURL} alt={props.name} />
        </div>
          <div className="article-name">{props.title}</div>
        <div className="author">{`${props.author}`}</div>
      </Link>
    </>
  );
};

export default Article;
