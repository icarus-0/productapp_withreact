import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { BASE_URL } from "../Services/Constants";
import { getProductDetails } from "../Services/Productservice";

function Product() {
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getProductDetails(setProduct, setCategory, setOffers, slug);
  }, [setProduct, setCategory, setOffers, slug]);

  return (
    <div>
      <Navbar />
      <div className="container mt-5 w-25 h-25">
        <div class="card mb-3">
          <img src={BASE_URL + product.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{product.title}</h5>
            <p class="card-text">{product.desc}</p>
            <p class="card-text">Category -{category}</p>
            <p class="card-text">
              <small class="text-muted">Price - {product.price} Rs.</small>
            </p>
            {offers.map((offer) => {
              return (
                <span class="badge text-bg-primary m-2">{offer.title}</span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
