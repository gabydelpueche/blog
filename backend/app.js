const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port =  process.env.PORT || 3000;
const post = require('./models/post');
const user = require('./models/user');
const cors = require("cors");

mongoose.connect('mongodb+srv://gdelpu720:34768ppgX22334*@cluster0.g7epr1c.mongodb.net/BlogPost')
    .then( () => {
        console.log('Connected');
    })
    .catch( err => {
        console.error(err);
    });

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.get('/getPost', async (req, res) =>{
    await post
    .find()
    .then(result => {
        res.json(result)
    })
    .catch(err => console.error(err))
});

app.post('/createPost', async (req, res) => {
    console.log("hi mom")
    const add = new post({
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
    });
    await add.save();
    res.json(add);
});

app.post('/createUser', async (req, res) =>{
    const add = new user({
        username: req.body.username,
        password: req.body.password
    });
    await add.save();
    res.json(add);
});

app.listen(port, () => {
    console.log('listening');
})