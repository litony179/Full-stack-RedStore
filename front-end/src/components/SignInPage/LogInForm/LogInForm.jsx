import React from "react";
import { Link } from "react-router-dom";
import "./LogInForm.css";

function LogInForm(props) {
  return (
    <div className="box-container">
      <form className="form-container">
        <input className="form-input" type="email" placeholder="email"></input>
        <input
          className="form-input"
          type="password"
          placeholder="password"
        ></input>
        <Link className="muted-link" to="#">
          Forgot your password?
        </Link>
        <button className="submit-button btn" type="submit">
          Sign In
        </button>
        <h5 className="muted-link">
          Don't have an account?
          <Link to="#" className="bold-link">
            Sign up
          </Link>
        </h5>
      </form>
    </div>
  );
}

export default LogInForm;
