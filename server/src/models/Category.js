import { Schema, model } from "mongoose";

const Category = new Schema({
  value: { type: String, required: true },
  icon: { type: String, required: true },
  picture: { type: String, required: true },
  subcategories: { type: Array },
});

export default model("Category", Category);
