const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get Posts
//the '/' gets the path from what we defined on line 13 inindex.js
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//Add Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        buttonValue: req.body.value,
        createdAt: new Date()
    });
    res.status(201).send();
});

//Delete Posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://testUser1:testuser1@ds131973.mlab.com:31973/seniordesign_zentality', {
        useNewUrlParser: true
    });

    return client.db('seniordesign_zentality').collection('mood');
}


module.exports = router;