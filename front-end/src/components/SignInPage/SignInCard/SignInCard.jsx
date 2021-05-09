import React, { useState } from "react";
import "../SignInCard/SignInCard.css";
import LogInForm from "../LogInForm/LogInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { motion } from "framer-motion";
import { SignInCardContext } from "./SignInCardContext";

const backdropVarients = {
  expanded: {
    width: "233%", 
    height: "1080px", 
    borderRadius: "20%"
  },
  collapsed: {
    width: "160%",
    height: "35rem",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.5,
  stiffness: 30,
}

function SignInCard(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signIn");

  const toggleAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000 - 1500);
  }

  const switchToSignUp = () => {
    toggleAnimation();
    setTimeout(()=> {
      setActive("signUp");
    }, 400)
    
  }

  const switchToSignIn = () => {
    toggleAnimation();
    setTimeout(()=> {
      setActive("signIn");
    }, 400)
    
  }

  const contextValue = { switchToSignUp, switchToSignIn }


  return (
    // React createontext
    <SignInCardContext.Provider value={contextValue}>
      <div className="sign-in-card-container">
        <div className="top-container">
          <motion.div initial={false} animate={isExpanded ? { width: "233%", height: "1080px", borderRadius: "20%"} : {scale : "1"}} varients={backdropVarients} transition={expandingTransition} className="back-drop" />
          {active === "signIn" && <div className="header-container">
            <h2 className="header-text">Welcome</h2>
            <h2 className="header-text">Back</h2>
            <h5 className="small-text">Please Sign-in to continue!</h5>
          </div>}
          {active === "signUp" && <div className="header-container">
            <h2 className="header-text">Create</h2>
            <h2 className="header-text">Account</h2>
            <h5 className="small-text">Please sign up to RedStore</h5>
          </div>}
        </div>
        <div className="inner-container">
            {active === "signIn" && <LogInForm></LogInForm>}
            {active === "signUp" && <SignUpForm></SignUpForm>}
        </div>
      </div>
    </SignInCardContext.Provider>
  );
}

export default SignInCard;
