const USER = require('../models/user');
const {setUser} = require('../service/auth')

async function handleUserSignUp(req,res) {
    const currentUser = req.user._id;

    if(currentUser) {
        return res.redirect("/");
    }

    const {name,email,password} = req.body;

    await USER.create({
         name,
         email,
         password
    });
    return res.redirect("/");

}

async function handleUserLogin(req,res) {
    const {email,password} = req.body;
    const user = await USER.findOne({email,password});
    if(!user) {
        return res.redirect("/user/login");
    }
    const token = setUser(user);
    res.cookie("uid",token);
    return res.redirect("/");    
}


module.exports = {
    handleUserSignUp, handleUserLogin
}