import { Error } from "mongoose";

// Config
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const app = express();

// Custom imports
const userRoutes = require("./routers/userRoutes");

// connecting DB
mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  (err:Error) => {
    if (err) return console.log(err);
    console.log("DB Connected");
  }
);

// Auth global
declare global {
  namespace Express {
    interface Request {
      id: number
    }
  }
}

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(morgan("common"));

// Routes
app.use("/auth", userRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, (err:Error) => {
  if (err) throw err;
  console.log(`Listening at http://localhost:${PORT}`);
});