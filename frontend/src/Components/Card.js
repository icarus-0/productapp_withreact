import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../Services/Constants";

function Card(props) {
  return (
    <div>
      <div class="card">
        <img src={BASE_URL + props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <p class="card-text">Price - {props.price} Rs.</p>
          <Link to={"/product/" + props.slug} class="btn btn-primary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
