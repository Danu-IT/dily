import express from "express";
import mongoose from "mongoose";
import authRouter from "./routers/authRouter.js";

const PORT = process.env.PORT || 5000;
("Lfybbk14122000");
const app = express();
app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://d_tareev:Lfybbk14122000@cluster2.vs1eiiz.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log("listening on port " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
