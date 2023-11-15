const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

//Added server stuff
const authRoute = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const corsOptions = {
    origin: [],
    allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true,
    methods: ['GET', 'POST'],
};
require('dotenv').config();

const port =  process.env.PORT || 3000;

//Mongoose Collections
const post = require('./models/post');
const user = require('./models/user');

mongoose.connect('mongodb+srv://gdelpu720:34768ppgX22334*@cluster0.g7epr1c.mongodb.net/BlogPost')
    .then( () => {
        console.log('Connected');
    })
    .catch( err => {
        console.error(err);
    });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST GET PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
// Server stuff
app.use(cookieParser());
app.use('/', authRoute);

// Generates posts on home page
app.get('/getPost', async (req, res) =>{
    await post
    .find()
    .then(result => {
        res.json(result)
    })
    .catch(err => console.error(err))
});

// Views specific posts on view page
app.get('/viewPost/:id', async (req, res) =>{
    console.log('hi mom')
    await post
    .findOne({_id: req.params.id})
    .then(thisPost => {
        res.json(thisPost)
    })
    .catch(err => console.error(err))
})

// Login system
app.get('/findUser/:username/:password', async (req, res) =>{
    // const loggedIn = localStorage.getItem('loggedIn');
    const found = await user.findOne({
            username: req.params.username,
            password: req.params.password
        });

    if(!found){
        console.log("user not found")
    } else{
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

// Registering a new user into database
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