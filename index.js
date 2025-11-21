const express = require('express');
const urlRouter = require('./routes/url');
const userRouter = require('./routes/user');
const { connectDB } = require('./models/connect');
const URL = require("./models/url");
const path = require("path");
const cookieParser = require('cookie-parser');
const {restriction} = require('./middleware/auth');


const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'public')));

connectDB("mongodb+srv://wintersoldier:6euDTAOPsZqUNC22@cluster0.prbvpwx.mongodb.net/").then(() => console.log("Connection done."));

app.set("view engine", "ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/url',restriction,urlRouter);

 app.use('/user', userRouter);

app.listen(PORT,() => console.log("Server started..."));