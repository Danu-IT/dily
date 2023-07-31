import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

import authRouter from "./routers/authRouter.js";
import categoryRouter from "./routers/categoryRouter.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
    optionSuccessStatus: 200,
  })
);
app.use(morgan("dev"));

// Маршруты
app.use("/auth", authRouter);
app.use("/category", categoryRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
