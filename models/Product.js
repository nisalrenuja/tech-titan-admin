import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  title: String,
  price: Number,
  description: String,
});

export const product = model("product", ProductSchema);
