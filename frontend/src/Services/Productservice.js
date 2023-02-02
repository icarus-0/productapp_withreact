import Request from "../Actions/Request";
import axios from "axios";
import { config } from "../Services/Constants";

export async function getProductDetails(setProduct, slug) {
  let data = { slug };

  const body = JSON.stringify(data);

  const resoffer = await axios.post(Request.productDetails, body, config);
  setProduct(resoffer.data);
}
