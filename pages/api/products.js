import { product } from "@/models/Product";
import { mongooseConnect } from "@/utils/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await product.findOne({ _id: req.query.id }));
    } else {
      const products = await product.find({});
      res.json(products);
    }
  }

  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }

  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    try {
      await product.updateOne({ _id }, { title, description, price });
      res.json({
        message: "Product updated successfully",
      });
    } catch {
      res.json({
        message: "Product update failed",
      });
    }
  }

  //delete product
  if (method === "DELETE") {
    await product.deleteOne({ _id: req.query.id });
    res.json({
      message: "Product deleted successfully",
    });
  }
}
