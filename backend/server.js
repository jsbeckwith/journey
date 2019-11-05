const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const postRoutes = express.Router();

<<<<<<< HEAD
=======
// define Post skeleton to be of the structure given
// in posts.model.js
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
let Post = require("./posts.model");

app.use(cors());
app.use(bodyParser.json());

<<<<<<< HEAD
mongoose.connect('mongodb://127.0.0.1:27017/posts', { useNewUrlParser: true });
const connection = mongoose.connection;

=======
// open our connection to the mongodb database!
mongoose.connect('mongodb://127.0.0.1:27017/posts', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

// notify (to console) when our mongodb connection is up.
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

<<<<<<< HEAD
=======
// GET operation (at index route; get all posts!)
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
postRoutes.route('/').get(function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.json(posts);
        }
    });
});

<<<<<<< HEAD
=======
// GET operation (at specific post id route; get one specific post!)
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
postRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Post.findById(id, function(err, post) {
        res.json(post);
    });
});

<<<<<<< HEAD
=======
// POST operation (at specific post id route; modify one post!)
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
postRoutes.route('/update/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (!post)
            res.status(404).send("data is not found");
        else
            post.author = req.body.author;
            post.date = req.body.date;
            post.content = req.body.content;

            post.save().then(post => {
                res.json('post updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

<<<<<<< HEAD
=======
// POST operation (at generalized add route; post something!)
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json({'post': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

<<<<<<< HEAD
app.use('/posts', postRoutes);

=======
// specify where we run our GET/POST operations
app.use('/posts', postRoutes);

// notify (at console) when our server is up!
>>>>>>> 307d519ca2b6f4dca54fa81d229ba50df1a6b234
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});