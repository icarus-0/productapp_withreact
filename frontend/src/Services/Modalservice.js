import Request from "../Actions/Request";
import axios from "axios";
import { config } from "../Services/Constants";

export async function AddCategory(title) {
  let data = { title };

  const body = JSON.stringify(data);

  const res = await axios.post(Request.category, body, config);
}

export async function AddOffer(title, price) {
  let data = { title, price };

  const body = JSON.stringify(data);

  const res = await axios.post(Request.offer, body, config);
}

export async function getOffersAndCategories(setOffers, setCategories) {
  const resoffer = await axios.get(Request.offer, config);
  setOffers(resoffer.data);

  const rescat = await axios.get(Request.category, config);
  setCategories(rescat.data);
}

export async function AddProduct(
  title,
  price,
  description,
  image,
  category,
  selectedOffers
) {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("image", image);
  formData.append("category", category);
  formData.append("offers", selectedOffers);

  const config2 = {
    headers: {
      "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      Accept: "application/json",
    },
  };

  const res = await axios.post(Request.product, formData, config2);
  if (res) {
    alert("Product Added !");
  }
}
