const User = require("../models/user.model")
const httpStatus = require('http-status');

const register = async(data) => {
    const user = await User.create(data)
    return user
}

const getUserByEmail = async(email) => {
    const user = await User.findOne({
        email
    });
    return user
}

const login = async(email, password) => {
    const user = await getUserByEmail(email)
    if (!user || !(await user.isPasswordMatch(password))) {
        return "Incorrect Email or Password"
    }
    return user
}

module.exports = {
    register,
    getUserByEmail,
    login
}
