import multiparty from "multiparty";
import { v2 as cloudinary } from "cloudinary";

export default async function handler(req, res) {
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
  cloudinary.config({
    cloud_name: "dsswfdxuq",
    api_key: "765842844738341",
    api_secret: "StHYORkAKNnd5L_wBMLrP_v4PyE",
  });
  try {
    const result = await cloudinary.uploader.upload(files.file[0].path, {
      folder: "tech-titan",
    });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Image upload failed" });
  }
  console.log("length:", files.file.length);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
