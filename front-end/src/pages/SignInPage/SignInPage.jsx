import React from "react";
import SignInCard from "../../components/SignInPage/SignInCard/SignInCard";
import "./SignInPage.css";
import {motion} from "framer-motion";

export default function SignInPage() {
  return (
    <div className="sign-in-page-container">
      <SignInCard></SignInCard>
    </div>
  );
}
