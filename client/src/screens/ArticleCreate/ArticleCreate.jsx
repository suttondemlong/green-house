import React, { useState } from "react";
import './ArticleCreate.css'
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createArticle } from "../../services/articles"


function ArticleCreate(props) {
  const [article, setArticle] = useState({
    title: "",
    imgURL: "",
    content: "",
    author: ""
  });
  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArticle({
      ...article,
      [name]: value,
    })
  };
  const handleSumbit = async (event) => {
    event.preventDefault();
    const created = await createArticle(article);
    setCreated({ created })
  }; 
  if (isCreated) {
    return <Redirect to={"/articles"} />
    }
  
  // const createAlert = () => {
  //   alert('Thank you for submitting to the GreenHouse community!')
  //   if (window.comfirm) {
  //     window.location = '/articles'
  //   }  
  // }
  
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSumbit}>
        <input
          className="create-title"
          placeholder="Title"
          value={article.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
          maxLength="40"
        />
        <input
          className="create-image"
          placeholder="Image URL"
          value={article.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <textarea
          className="create-textarea"
          rows={10}
          placeholder="Content"
          value={article.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="create-author"
          placeholder="Author"
          value={article.author}
          name="author"
          required
          onChange={handleChange}
        />
        <button type="submit" className="create-submit-button" onClick='createAlert()'>
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default ArticleCreate;