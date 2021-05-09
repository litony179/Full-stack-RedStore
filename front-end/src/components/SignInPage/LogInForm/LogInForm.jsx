import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SignInCardContext } from "../SignInCard/SignInCardContext";
import "./LogInForm.css";

function LogInForm(props) {
  const { switchToSignUp } = useContext(SignInCardContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    // This makes it so that the form does not refresh
    e.preventDefault();
    //TODO: Sign In action
  };

  return (
    <div className="box-container">
      <form onSubmit={submitHandler} className="form-container">
        <input
          className="form-input"
          type="email"
          placeholder="Enter email"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="form-input"
          type="password"
          placeholder="Enter password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Link className="muted-link" to="#">
          Forgot your password?
        </Link>
        <button className="submit-button btn" type="submit">
          Sign In
        </button>
        <h5 className="muted-link">
          Don't have an account?{" "}
          <Link to="#" onClick={switchToSignUp} className="bold-link">
            Create your account
          </Link>
        </h5>
      </form>
    </div>
  );
}

export default LogInForm;
