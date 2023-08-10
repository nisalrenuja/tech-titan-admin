import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function ProductForm({
  _id,
  title: defaultTitle,
  description: defaultDescription,
  price: defaultPrice,
  images,
}) {
  const [title, setTitle] = useState(defaultTitle || "");
  const [description, setDescription] = useState(defaultDescription || "");
  const [price, setPrice] = useState(defaultPrice || 0);
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  async function saveProduct(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      price,
    };
    if (_id) {
      axios.put("/api/products", {
        ...data,

        _id,
      });
    } else {
      axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
  }

  return (
    <form onSubmit={saveProduct}>
      <div className="mt-4 ml-4 mr-4">
        <label>Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Product Images</label>
        <div className="mb-4">
          <button>upload</button>
          {!images?.length && <p>No images uploaded</p>}
        </div>

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
  );
}
