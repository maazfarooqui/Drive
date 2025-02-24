const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index.routes');

dotenv.config();

const connecToDB = require('./config/db');
connecToDB();
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/user', userRouter)

app.use('/', indexRouter)






app.listen(5000);

