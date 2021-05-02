import React, { useState } from "react";
import "../SignInCard/SignInCard.css";
import LogInForm from "../LogInForm/LogInForm";
import { motion } from "framer-motion";

const backdropVarients = {
  animate={{ scale: 0.5 }} 
     transition={{ duration: 2 }}

}

function SignInCard(props) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="sign-in-card-container">
      <div className="top-container">
        <motion.div className="back-drop" />
        <div className="header-container">
          <h2 className="header-text">Welcome</h2>
          <h2 className="header-text">Back</h2>
          <h5 className="small-text">Please Sign-in to continue!</h5>
        </div>
      </div>
      <div className="inner-container">
        <LogInForm></LogInForm>
      </div>
    </div>
  );
}

export default SignInCard;
