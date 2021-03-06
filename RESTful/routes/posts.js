import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

//Gets back all posts
router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//Submits posts
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    console.log(req.body);
});

//Pull Specific POST
router.get("/:postId", async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//Delete post
router.delete("/:postId", async (req, res) =>{
    try{
        const removedPost = await Post.deleteOne({ _id: req.params.postId});
    }catch(err){
        res.json({message: err});
    }
});

//Update post
router.patch("/:postId", async (req, res) =>{
    try{
        const updatedPost = await Post.updateOne({ _id: req.params.postId}, {$set: {title: req.body.title }
        });
        res.json({updatedPost});
    }catch(err){
        res.json({message: err});
    }
});

export default router;