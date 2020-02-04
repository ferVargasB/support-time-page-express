const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');


//settings
app.set('views', path.join(__dirname, 'views') );
app.set('view engine', 'ejs');


//middleware
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded
app.use(session({
    secret: 'mySecretKey_fernando',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

//route
app.use(require('./routes/index'));


app.listen(3000);
console.log('Server on port', 3000);