const express = require('express');
const postModel = require('./posts.model.js');
const app = express();

app.get('/posts', async (req, res) => {
    const posts = await postModel.find({});

    try {
        res.send(posts);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/:id', async (req, res)  => {
    const post = await postModel.findById(req.params.id);

    try {
        res.send(post);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/post', async (req, res) => {
    const post = new postModel(req.body);
  
    try {
      await post.save();
      res.send(post);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.patch('/post/:id', async (req, res) => {
  try {
      const post = await postModel.findById(req.params.id);
      await post.updateOne(req.body);
      await post.save();
      res.send(post);
    } catch (err) {
      res.status(500).send(err)
    }
  })

app.delete('/post/:id', async (req, res) => {
    try {
      const post = await postModel.findByIdAndDelete(req.params.id)
  
      if (!post) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
})

module.exports = app