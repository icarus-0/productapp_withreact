import Request from "../Actions/Request";
import axios from "axios";
import { config } from "../Services/Constants";

export async function getProducts(setProducts) {
  const res = await axios.get(Request.product, config);
  console.log(res);
  setProducts(res.data);
}
