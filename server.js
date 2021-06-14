const express = require('express');
const mongoose = require('mongoose');
const app = express();
const articleRouter = require('./routes/articles');

mongoose.connect('mongoose://localhose/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    const articles = [{
        title: 'test article',
        createdAt: new Date(),
        description: 'test description',
    },
    {
        title: 'test article 2',
        createdAt: new Date(),
        description: 'test description 2',  
    }]
    res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);
app.listen(5000); 