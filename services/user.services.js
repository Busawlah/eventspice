const User = require("../models/user.model")
const httpStatus = require('http-status');
const emailer = require('../nodemailer/mailer')

const register = async(data) => {
    const user = await User.create(data)
    let mailoptions = {
        from: 'eventspice@gmail.com', // sender address
        to: data.email, // list of receivers
        subject: "Account Successfully Created", // Subject line
        text: "Hi, Your account has been successfully created. Eventspice is a platform that lets you manage your events from your comfort space without having to worry about gatecrashers and what not. Enjoy the experience!", // plain text body`
      };
    await emailer(mailoptions)
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

// const logout = async (refreshToken) => {
//     const refreshTokenDoc = await Token.findOne({ token: refreshToken, type: tokenTypes.REFRESH, blacklisted: false });
//     if (!refreshTokenDoc) {
//       throw new Error(httpStatus.NOT_FOUND, 'Not found');
//     }
//     await refreshTokenDoc.remove();
//   };

module.exports = {
    register,
    getUserByEmail,
    login
}
