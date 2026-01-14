const express = require('express');
const urlRouter = require('./routes/url');
const userRouter = require('./routes/user');
const { connectDB } = require('./models/connect');
const URL = require("./models/url");
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require('cors')
const {restriction} = require('./middleware/auth');

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'public')));

connectDB(process.env.MONGO_STRING).then(() => console.log("Connection done."));

app.set("view engine", "ejs");
app.set('views',path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

app.get("/",(req,res) => {res.redirect("/url")});

app.use('/url',restriction,urlRouter);

app.use('/user', userRouter);

app.listen(PORT,() => console.log("Server started..."));