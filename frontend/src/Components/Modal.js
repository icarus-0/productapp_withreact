import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AddCategory,
  AddOffer,
  AddProduct,
  getOffersAndCategories,
} from "../Services/Modalservice";

function Modal(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDesription] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [offers, setOffers] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const navigate = useNavigate();

  const closemodal = useRef();

  useEffect(() => {
    if (props.type === "product") {
      getOffersAndCategories(setOffers, setCategories);
    }
  }, [setOffers, setCategories, props]);

  function handleCheckBoxChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOffers((pre) => [...pre, value]);
    } else {
      setSelectedOffers((pre) => {
        return [...pre.filter((off) => off !== value)];
      });
    }
  }

  if (props.type === "category") {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={"#" + props.type}
        >
          + Category
        </button>
        <div class="modal fade" id={props.type} tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Category
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label>Title</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={closemodal}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    AddCategory(title, navigate, closemodal);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "offer") {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={"#" + props.type}
        >
          + Offer
        </button>
        <div class="modal fade" id={props.type} tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Offer
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label>Title</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <label className="mt-2">Discount</label>
                <input
                  className="form-control"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={closemodal}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    AddOffer(title, price, navigate, closemodal);
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.type === "product") {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={"#" + props.type}
        >
          + Product
        </button>
        <div class="modal fade" id={props.type} tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <label>Title</label>
                <input
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <label className="mt-2">Price</label>
                <input
                  className="form-control"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                <label className="mt-2">Description</label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => {
                    setDesription(e.target.value);
                  }}
                />
                <label className="mt-2">Image</label>
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <div class="input-group mb-3 mt-2">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Select Category
                  </label>
                  <select
                    class="form-select"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  ><option value={1}>Choose a category ..</option>
                    {categories.map((cat) => {
                      return <option value={cat.id}>{cat.title}</option>;
                    })}
                  </select>
                </div>

                {offers.map((off) => {
                  return (
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={off.id}
                        onChange={handleCheckBoxChange}
                      />
                      <label class="form-check-label">{off.title}</label>
                    </div>
                  );
                })}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={closemodal}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    AddProduct(
                      title,
                      price,
                      description,
                      image,
                      category,
                      selectedOffers,
                      navigate,
                      closemodal
                    );
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
