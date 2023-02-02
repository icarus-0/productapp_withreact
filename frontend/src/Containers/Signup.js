import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { Authenticate } from "../Services/Signinservice";
import { useNavigate, Link } from "react-router-dom";

function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [repassword, setRePassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>
      <div className="m-5 p-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control w-75"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control w-75"
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
            value={repassword}
          />
          <button
            className="btn btn-primary mt-2"
            onClick={() => {
              Authenticate(
                email,
                password,
                props.type,
                setMessage,
                navigate,
                name,
                repassword
              );
            }}
          >
            Signin
          </button>
          <span>{message}</span>
        </div>
        <Link to="/signin">Already Register?</Link>
      </div>
    </div>
  );
}

export default Signup;
