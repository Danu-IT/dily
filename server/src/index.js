import express from "express";
import mongoose from "mongoose";
import authRouter from "./routers/authRouter.js";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));

// Маршруты
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://d_tareev:Lfybbk14122000@cluster2.vs1eiiz.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
