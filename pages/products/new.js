import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function createProduct(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      price,
    };
    axios.post("/api/products", data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <div className="mt-4 ml-4 mr-4">
          <h1>Add New Product</h1>
          <label>Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Product Description</label>
          <textarea
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Product Price</label>
          <input
            type="number"
            placeholder="Price (in USD)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="btn-primary">Save</button>
        </div>
      </form>
    </Layout>
  );
}
