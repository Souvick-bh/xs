const {getUser} = require('../service/auth');



async function restriction(req,res,next) {
    const userUid = req.cookies?.uid;
    // const userUid = req.headers["authorization"];
    if(!userUid) return res.redirect("/user/login");

    //const token = userUid.split('Bearer ')[1];
    const user = getUser(userUid);

    if(!user)  return res.redirect("/user/login");

    req.user = user;
    next();
}

module.exports = {
    restriction
}