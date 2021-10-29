const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const newPost = new Post({username, title, description});

    newPost.save()
        .then(() => res.json(`Post added! USERNAME: ${username} TITLE: ${title} DESCRIPTION: ${description}`))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;