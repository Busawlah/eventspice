const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({
    path: path.join(__dirname, "./.env"),
});


const AuthUser = (req, res, next) => {
    
    const token = req?.header('Authorization')?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({
            message: 'You are not logged in!',
            status: false
        });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({
                status: false,
                message: 'You are not logged in!'
            });
        }
        req.user = decodedToken;
        req.token = token;
        next();
    });
}

// const AuthRole = (role) => {
//     return (req, res, next) => {
//         if (req.user.role == role) {
//             res.status(401);
//             return res.send('User not allowed!');
//         }

//         next()
//     }
// }

module.exports = (AuthUser);