const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port =  process.env.PORT || 3000;
const post = require('./models/post');
const user = require('./models/user');
const cors = require("cors");
// const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://gdelpu720:34768ppgX22334*@cluster0.g7epr1c.mongodb.net/BlogPost')
    .then( () => {
        console.log('Connected');
    })
    .catch( err => {
        console.error(err);
    });

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/getPost', async (req, res) =>{
    await post
    .find()
    .then(result => {
        res.json(result)
    })
    .catch(err => console.error(err))
});

app.get('/findUser/:username/:password', async (req, res) =>{
    const found = await user.findOne({
            username: req.params.username,
            password: req.params.password
        });

    if(!found){
        console.log("user not found")
    }else{
        res.json(found)
    }

    // const username = req.params.username
    // const password = req.params.password

    // try{
    //     const found = await user.findOne({username})
    //     const valid = bcrypt.compare({password}, found.password)

    //     if(!found){
    //         res.status(400).json({ message: 'Failed to find user', error: error.message });
    //     }

    //     if (valid) {
    //         res.json(found);
    //     } else{
    //         console.log("Invalid Username or Password Entry");
    //         res.status(400).json({ message: 'Failed to validate user', error: error.message });
    //     };
    // } catch{
    //     res.status(500).json({ message: 'Server Error', error: error.message });
    // }
});

app.post('/createPost', async (req, res) => {
    const add = new post({
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        image: req.body.image,
    });
    try {
        await add.save();
        res.json({ message: 'Post created successfully', data: add });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create post', error: error.message });
    }
});

app.post('/createUser', async (req, res) =>{
    const add = new user({
        username: req.body.username,
        password: req.body.password
    });
    try {
        await add.save();
        res.json({ message: 'User created successfully', data: add });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create User', error: error.message });
    }
    // const saltRounds = 10
    // const { username, password } = req.body;

    // try {
    //     bcrypt.hash(password, saltRounds, (err, hash) => {
    //         if(err){
    //             console.error(err);
    //         } 
    //         const add = new user({
    //             username: username,
    //             password: hash
    //         });

    //         add.save()
    //             .then((added) =>{
    //                 res.json({ message: 'User created successfully', data: added });
    //             })
    //             .catch(err => {
    //                 res.status(500).json({ message: 'Failed to create User', error: err.message });
    //             });
    //     });
    // } catch (error) {
    //     res.status(500).json({ message: 'Server Error', error: error.message });
    // }
});

app.listen(port, () => {
    console.log('listening');
})