const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./users");
const postRouter = require('./routes');
const userRouter = require('./users');
const app = express();

app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: false
    })
);
app.use(bodyParser.json());

// open our connection to the mongodb database!
const uri = "mongodb+srv://jsb-mba:Journey123@journey-c0-paelm.gcp.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

// notify (to console) when our mongodb connection is up.
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use(userRouter);
app.use(postRouter);

app.listen(4000, () => { console.log('Server is running...') });
