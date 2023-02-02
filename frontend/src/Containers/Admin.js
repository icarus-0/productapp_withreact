import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Table from "../Components/Table";

function Admin() {
  const navigate = useNavigate();
  if (localStorage.getItem("isAutenticated")) {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Table title="Category" type="category" />
          <Table title="Offers" type="offer" />
        </div>
      </div>
    );
  } else {
    navigate("/");
  }
}

export default Admin;
