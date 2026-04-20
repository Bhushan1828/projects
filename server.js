const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//mongoDb connection

mongoose.connect("mongodb://127.0.0.1:2707/buspass").then(() => console.log("MongoDB Connected")).catch((err)=> console.log(err));

//schema

const user