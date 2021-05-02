const jwt = require('jsonwebtoken');
const generateToken = (user) => {

    // Jwt is an standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object
    // JWT_SECRET is a key to encrypt your token
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, process.env.JWT_SECRET || 'somethingsecret', {
        expiresIn: '30d'
    });
}

module.exports = generateToken;