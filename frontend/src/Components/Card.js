import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCardDetails } from "../Services/Cardservice";
import { BASE_URL } from "../Services/Constants";

function Card(props) {
  const [category, setCategory] = useState("");
  const [offerCount, setOfferCount] = useState("");

  useEffect(() => {
    getCardDetails(setCategory, setOfferCount, props.slug);
  }, [setCategory, setOfferCount, props.slug]);

  return (
    <div>
      <div class="card">
        <img src={BASE_URL + props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <p class="card-text">Price - {props.price} Rs.</p>
          <p class="card-text">Category -{category}</p>
          <p class="card-text">Total offers -{offerCount}</p>
          <Link to={"/product/" + props.slug} class="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
