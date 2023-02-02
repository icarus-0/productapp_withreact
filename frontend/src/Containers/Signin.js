import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Authenticate } from "../Services/Signinservice";
import { useNavigate, Link } from "react-router-dom";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className="m-5 p-5">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control w-75"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control w-75"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={() => {
              Authenticate(email, password, props.type, setMessage, navigate);
            }}
          >
            Signin
          </button>
          <span>{message}</span>
        </div>
        <Link to="/signup">Don't Registered Yet?</Link>
      </div>
    </div>
  );
}

export default Signin;
