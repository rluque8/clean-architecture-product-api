import { Schema, model } from "mongoose";
import { Product } from "../../../domain/product";

export const ProductSchema = new Schema<Product>({
  id: { type: String, required: true, unique: true, index: true },
  name: { type: String, required: true },
  description: { type: String },
});

export const ProductModel = model<Product>("ProductModel", ProductSchema);
