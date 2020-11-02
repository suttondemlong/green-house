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
  return (
    <Layout>
      <form className="create-form" onSubmit={handleSumbit}>
        <label htmlFor='title'/>
        <input
          className="input-title"
          placeholder="Title"
          value={article.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-image"
          placeholder="Image URL"
          value={article.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Content"
          value={article.content}
          name="content"
          required
          onChange={handleChange}
        />
        <input
          className="input-author"
          placeholder="Author"
          value={article.author}
          name="author"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
}

export default ArticleCreate;