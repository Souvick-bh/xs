const express = require('express');
const { handleUserSignUp, handleUserLogin } = require('../controllers/user');

const router = express.Router();

router.post("/signup", handleUserSignUp);

router.get("/signup",(req,res) => {
    return res.render("signup");
} );

router.post("/login", handleUserLogin)

router.get("/login",(req,res) => {
    return res.render("login");
})

module.exports = router;