import Request from "../Actions/Request";
import axios from "axios";
import { config } from "../Services/Constants";

export async function getCardDetails(setCategory, setOfferCount, slug) {
  let data = { slug };

  const body = JSON.stringify(data);
  const res = await axios.post(Request.productcatandoffers, body, config);

  setCategory(res.data.category);
  setOfferCount(res.data.offers.length);
}
