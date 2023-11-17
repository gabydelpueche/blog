const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

//Added server stuff
const authRoute = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const corsOptions = {
    origin: 'http://localhost:5174',
    allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true,
    methods: ['GET', 'POST'],
};
require('dotenv').config();

const port =  process.env.PORT || 3000;

//Mongoose Collections
const post = require('./models/post');
const user = require('./models/userModel');
const { createSecretKey } = require('crypto');

mongoose.connect('mongodb+srv://gdelpu720:34768ppgX22334*@cluster0.g7epr1c.mongodb.net/Blog')
    .then( () => {
        console.log('Connected');
    })
    .catch( err => {
        console.error(err);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'POST GET PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(express.json())
app.use(express.urlencoded({extended: true}));
// Server stuff
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/', authRoute);

// Generates posts on home page
app.get('/getPost', async (req, res) =>{
    // await post
    // .find()
    // .then(result => {
    //     res.json(result)
    // })
    // .catch(err => console.error(err))
    try{
        const result = await post.find();
        res.json(result)
    } catch(err){
        console.error(err);
        res.status(500).json({ message: 'Failed to get post', error: err.message });
    }
});

// Views specific posts on view page
app.get('/viewPost/:id', async (req, res) =>{
    await post
    .findOne({_id: req.params.id})
    .then(thisPost => {
        res.json(thisPost)
    })
    .catch(err => console.error(err))
})

// // Login system
// app.get('/findUser/:username/:password', async (req, res) =>{
//     // const loggedIn = localStorage.getItem('loggedIn');
//     const found = await user.findOne({
//             username: req.params.username,
//             password: req.params.password
//         });

//     if(!found){
//         console.log("user not found")
//     } else{
//         res.json(found)
//     }
// });

// Uploading a new post to the database
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

// // Registering a new user into database
app.post('/', async (req, res) =>{
    const add = new user({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    try {
        await add.save();
        res.json({ message: 'User created successfully', data: add });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create User', error: error.message });
    }
});

//Added server stuff
app.get('/generate-token', (req, res) => {
    const payload = { user: 'example_user' };
    console.log(payload)
    const token = jwt.sign(payload, createSecretKey, { expiresIn: '1h' });
    res.json({ token });
})

app.get('/verify-token', (req, res) => {
    const token = req.query.token;
    jwt.verify(token, createSecretKey, (err, decoded) => {
        if(err){
            console.error(err);
            res.status(401).json({ message: 'Failed to verify token', error: error.message });
        }else{
            res.json({ message: 'Verified Token', decoded });
        };
    });
});

app.listen(port, () => {
    console.log('listening');
})