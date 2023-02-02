import Request from "../Actions/Request";
import axios from "axios";
import { config } from "../Services/Constants";

export async function getProducts(setProducts) {
  const resoffer = await axios.get(Request.product, config);
  setProducts(resoffer.data);
}
