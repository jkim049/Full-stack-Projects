import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import postsRoute from "./routes/posts.js";
import userRoute from "./routes/user.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts", postsRoute);
app.use("/user", userRoute);

app.get("/", (req, res) => {
    res.send("We are home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true }, () => console.log("Connected to DB"));

//Listener
app.listen(3000);