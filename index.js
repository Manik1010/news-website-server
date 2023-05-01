const express = require('express')
const app = express()
const port = 4000
const news = require('./data/news.json')

const cors = require('cors');
app.use(cors());

const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Hello Worl Manik')
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);
})
app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    if( id == 0){
        res.send(news);
    }

    const catagorieNews = news.filter( n => parseInt(n.category_id) === id);
    res.send(catagorieNews);
})
app.listen(port, () => {
    console.log(`The news website API is runing: ${port}`)
})