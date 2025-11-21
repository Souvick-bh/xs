const USER = require('../models/user');
const {setUser} = require('../service/auth')

async function handleUserSignUp(req,res) {
    const {name,email,password} = req.body;
    await USER.create({
         name,
         email,
         password
    });
    return res.redirect("/url");

}

async function handleUserLogin(req,res) {
    const {email,password} = req.body;
    const user = await USER.findOne({email,password});
    if(!user) {
        return res.redirect("/user/login");
    }
    const token = setUser(user);
    res.cookie("uid",token);
    //return res.json({token})
    return res.redirect("/url");
}


module.exports = {
    handleUserSignUp, handleUserLogin
}