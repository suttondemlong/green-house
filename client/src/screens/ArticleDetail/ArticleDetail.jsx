import React, { useState, useEffect } from "react"
import "./ArticleDetail.css"
import Layout from "../../components/shared/Layout/Layout"
import { getArticle, deleteArticle } from "../../services/articles"
import { useParams, Link, Redirect } from "react-router-dom"

const ArticleDetail = (props) => {
  const [article, setArticle] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  const { id } = useParams()


  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getArticle(id)
      setArticle(article)
      setLoaded(true)
    }
    fetchArticle()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }
  if (isDeleted) {
  return <Redirect to={"/Home"} />
  }
  const handleDelete = async () => {
    await deleteArticle(article.id)
    setIsDeleted(!isDeleted)
  }

  return (
    <Layout>
      <div className="article-detail">
        <img className="article-detail-image" src={article.imgURL} alt={article.title} />
        <div className="detail">
          <div className="title">{article.title}</div>
          <div className="content">{article.content}</div>
          <div className="author">By: {article.author}</div>
          <div className="container">
            <Link className="edit-link" to={`/articles/${article.id}/edit`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ArticleDetail