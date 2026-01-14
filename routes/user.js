const express = require('express');
const { handleUserSignUp, handleUserLogin, handleUserSignout } = require('../controllers/user');

const router = express.Router();

router.post("/signup", handleUserSignUp);

router.get("/signup",(req,res) => {
    return res.render("signup");
} );

router.post("/login", handleUserLogin);

router.get("/login",(req,res) => {
    return res.render("login");
});

router.post("/signout", handleUserSignout);

module.exports = router;