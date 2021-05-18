import React from "react";
import SignInCard from "../../components/SignInPage/SignInCard/SignInCard";
import "./SignInPage.css";
import {motion} from "framer-motion";
import NavBar from "../../components/Utilities/NavBar/NavBar";

export default function SignInPage() {
  return (
    <div className="page-container">
      <div className="signin-navbar">
        <NavBar></NavBar>
      </div>
      <div className="sign-in-page-container">
        <SignInCard></SignInCard>
      </div>
    </div>
      
      
  );
}
