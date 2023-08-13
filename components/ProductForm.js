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

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }
      const res = await axios.post("/api/upload", data);
      console.log(res.data);
    }
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
          <label className="w-24 h-24 text-center items-center justify-center flex gap-1 text-sm text-gray-500 rounded-lg bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            <div>Upload</div>
            <input type="file" className="hidden" onChange={uploadImages} />
          </label>
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
