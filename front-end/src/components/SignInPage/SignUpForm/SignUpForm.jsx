import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { SignInCardContext } from "../SignInCard/SignInCardContext";
import "./SignUpForm.css";

function SignUpForm(props) {
  const { switchToSignIn } = useContext(SignInCardContext);
  return (
    <div className="box-container">
      <form className="form-container">
        <input
          className="form-input"
          type="text"
          placeholder="full name"
        ></input>
        <input className="form-input" type="email" placeholder="email"></input>
        <input
          className="form-input"
          type="password"
          placeholder="password"
        ></input>
        <input
          className="form-input"
          type="password"
          placeholder="confirm password"
        ></input>

        
        <button className="submit-button btn" type="submit">
          Sign In
        </button>
        <h5 className="muted-link">
          Already have an account?
          <Link to="#" onClick={switchToSignIn} className="bold-link">
            Sign in
          </Link>
        </h5>
      </form>
    </div>
  );
}

export default SignUpForm;
