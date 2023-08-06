import { product } from "@/models/Product";
import { mongooseConnect } from "@/utils/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  const { title, description, price } = req.body;
  if (method === "POST") {
    const productDoc = await product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
}
