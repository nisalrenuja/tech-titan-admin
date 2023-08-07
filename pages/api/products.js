import { product } from "@/models/Product";
import { mongooseConnect } from "@/utils/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();
  const { title, description, price } = req.body;

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await product.findOne({ _id: req.query.id }));
    } else {
      const products = await product.find({});
      res.json(products);
    }
  }

  if (method === "POST") {
    const productDoc = await product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
}
