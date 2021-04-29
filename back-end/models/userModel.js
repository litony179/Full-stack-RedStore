const mongoose = require('mongoose');
// This is the fields that the user has to fill in to log-in to the platform
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);


module.exports = User;