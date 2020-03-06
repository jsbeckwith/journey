const express = require('express');
const router = express.Router();

const postModel = require('../models/posts.model.js');

// TODO specify
// get all posts
router.get('/posts', async (req, res) => {
    console.log("posts called");
    const posts = await postModel.find({});

    try {
        res.send(posts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// get specific post
router.get('/:id', async (req, res)  => {
    const post = await postModel.findById(req.params.id);

    try {
        res.send(post);
    } catch (err) {
        res.status(500).send(err);
    }
});

// add new post
router.post('/post', async (req, res) => {
    const post = new postModel(req.body);
  
    try {
      await post.save();
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
});

// edit existing post
router.patch('/post/:id', async (req, res) => {
  try {
      const post = await postModel.findById(req.params.id);
      await post.updateOne(req.body);
      await post.save();
      res.send(post);
    } catch (err) {
      res.status(500).send(err)
    }
  })

// delete specific post
router.delete('/post/:id', async (req, res) => {
    try {
      const post = await postModel.findByIdAndDelete(req.params.id)
  
      if (!post) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
})

module.exports = router;




////////////////////////////////



// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const keys = require("./config/keys");
// // Load Posts model
// const Posts = require("./posts.model");



// // for calendar page, group entries of self (and friends later) by date
// app.get('/calendar', async (req, res) => {
//     try {
//       const grouped;
//       res.send(grouped);
//     } catch (err) {
//       res.status(500).send(err)
//     }
// });
  
// // https://docs.mongodb.com/manual/aggregation/
// // https://stackoverflow.com/questions/48752893/how-to-use-aggregate-with-callback-in-mongoose-model-using-express-js