const mongoose = require('mongoose');
const bcrpyt = require('bcrypt');

const userModelSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Your email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Your password is required']
    },
    username: {
        type: String,
        required: [true, 'Your username is required']
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
},
    {
        collection: 'users',
        timestamp: true,
    });

    userModelSchema.pre('save', async (next) => {
        this.password = await bcrpyt.hash(this.password, 12);
        next();
    });

module.exports = mongoose.model('User', userModelSchema);