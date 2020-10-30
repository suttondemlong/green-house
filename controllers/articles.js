const Article = require('../models/article')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        res.json(articles)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getArticle = async (req, res) => {
    try {
        const { id } = req.params
        const article = await Article.findById(id)
        if (article) {
            return res.json(article)
        }
        res.status(404).json({ message: 'Article not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createArticle = async (req, res) => {
    try {
        const article = await new article(req.body)
        await Article.save()
        res.status(201).json(article)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateArticle = async (req, res) => {
    const { id } = req.params
    await Article.findByIdAndUpdate(id, req.body, { new: true }, (error, article) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!article) {
            return res.status(404).json({ message: 'Article not found!' })
        }
        res.status(200).json(article)
    })
}

const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Article.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Article deleted")
        }
        throw new Error("Article not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createArticle,
    getArticles,
    getArticle,
    updateArticle,
    deleteArticle
}
