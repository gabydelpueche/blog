const User = require('../models/userModel');
const bcrpyt = require('bcrypt');
const { createToken } = require('../utilities/secretToken');

module.exports.Signup = async (req, res, next) =>{
    try{
        const { email, password, username, createdAt } = req.body;
        if(!email || !password || !username){
            return res.json({ message: 'All fields are required' });
        };

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.json({ message: 'User already exists' });
        };

        const user = await User.create({ email, password, email, createdAt });
        const token = createToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(201).json({ message: 'User signed up successfully', success: true, user});
        next()
    } catch(err){
        res.status(500).json({ message: 'Failed to sign up', error: err.message });
    };
};

module.exports.Login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.json({ message: 'All fields are required' });
        };

        const user = await User.findOne({ email });
        if(!user){
            return res.json({ message: 'Incorrect password or email' });
        };

        const auth = await bcrpyt.compare(password, user.password);
        if(!auth){
            return res.json({ message: 'Incorrect password or email' });
        };

        const token = createToken(user._id);
        res.cookie('token', token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(200).json({ message: 'User logged successfully', success: true, user});
        next();
    } catch{
        res.status(500).json({ message: 'Failed to login', error: error.message });
    };
};