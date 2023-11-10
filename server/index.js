import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config'

import posts from "./routers/posts.js";

const app = express();
const PORT = process.env.port || 5000;
const URI = process.env.DATA_URI;

//limit client upload
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

//mongoDB settings
mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("MongoDB Connected...");
		app.listen(PORT, () => {
			console.log(`Server running on port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log("err", err);
	});
//http://localhost:5000/posts

//router setting
app.use("/posts", posts);
