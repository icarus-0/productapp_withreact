import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { GetCategory, GetOffers } from "../Services/Tableservice";

function Table(props) {
  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    if (props.type === "category") {
      GetCategory(setCategories);
    }
    if (props.type === "offer") {
      GetOffers(setOffers);
    }
  }, [setCategories, props]);
  if (props.type === "category") {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col-6">
            <h4 className="m-2">{props.title}</h4>
          </div>
          <div className="col-6 d-flex flex-row-reverse">
            <Modal type={props.type} />
          </div>
        </div>
        <div
          className="border mt-2 overflow-y-scroll"
          style={{ height: "300px" }}
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => {
                return (
                  <tr>
                    <th scope="row">{category.id}</th>
                    <td>{category.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (props.type === "offer") {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col-6">
            <h4 className="m-2">{props.title}</h4>
          </div>
          <div className="col-6 d-flex flex-row-reverse">
            <Modal type={props.type} />
          </div>
        </div>
        <div
          className="border mt-2 overflow-y-scroll"
          style={{ height: "300px" }}
        >
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Product Count</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => {
                return (
                  <tr>
                    <th scope="row">{offer.title}</th>
                    <td>{offer.products.length}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;
