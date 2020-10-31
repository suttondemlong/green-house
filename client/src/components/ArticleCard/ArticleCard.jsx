import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";


const ArticleCard = (props) => {
  return (
    <div className="article-card">
      <Link className="card" to={`/articles/${props._id}`} style={{textDecoration: 'none', color: 'black'}}>
        <img className="article-card-image" src={props.imgURL} alt={props.title} />
        <div className='article-title'>{props.title}</div>
        <div className='date-placeholder'>UPDATED OCTOBER 10, 2020</div>
      </Link>
    </div>
  );
};

export default ArticleCard;
