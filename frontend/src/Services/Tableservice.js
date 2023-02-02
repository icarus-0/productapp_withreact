import Request from "../Actions/Request";
import axios from "axios";
import { config } from "../Services/Constants";

export async function GetCategory(setCategories) {
  const res = await axios.get(Request.category, config);
  setCategories(res.data);
}

export async function GetOffers(setOffers) {
  const res = await axios.get(Request.offer, config);
  console.log(res.data);
  setOffers(res.data);
}
