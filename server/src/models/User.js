import { Schema, model } from "mongoose";

const User = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export default model("User", User);
