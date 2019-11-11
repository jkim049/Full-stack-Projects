import express from "express";

const router = express.Router();

router.get("/", (req, res) =>{
    res.send("User home");
});

router.get("/jkim", (req, res) => {
    res.send("Jkim home");
});

export default router;